const urlRegexp = /^([^#]*)(#!)?\/?([^#]*)(#)?(.*)$/;

export class Location {
  constructor(url = "") {
    const [, site, hashBangExists, page, hashSignExists, fragment] = url.match(urlRegexp);

    this.url = url;
    this.site = site;
    this.page = page || "index";
    this.fragment = fragment;
    this.isAnchor = !this.isAbsolute && !hashBangExists && hashSignExists;
  }

  get isAbsolute() {
    return this.site !== "";
  }

  getLinkHref(currentPage) {
    if (!this.isAnchor) {
      return this.url;
    }

    return `#!/${currentPage}#${this.fragment}`;
  }
}
