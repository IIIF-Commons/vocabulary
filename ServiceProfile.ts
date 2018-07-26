export enum ServiceProfile {

    // image api
    STANFORDIIIFIMAGECOMPLIANCE0 =          "http://library.stanford.edu/iiif/image-api/compliance.html#level0",
    STANFORDIIIFIMAGECOMPLIANCE1 =          "http://library.stanford.edu/iiif/image-api/compliance.html#level1",
    STANFORDIIIFIMAGECOMPLIANCE2 =          "http://library.stanford.edu/iiif/image-api/compliance.html#level2",
    STANFORDIIIFIMAGECONFORMANCE0 =         "http://library.stanford.edu/iiif/image-api/conformance.html#level0",
    STANFORDIIIFIMAGECONFORMANCE1 =         "http://library.stanford.edu/iiif/image-api/conformance.html#level1",
    STANFORDIIIFIMAGECONFORMANCE2 =         "http://library.stanford.edu/iiif/image-api/conformance.html#level2",
    STANFORDIIIF1IMAGECOMPLIANCE0 =         "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",
    STANFORDIIIF1IMAGECOMPLIANCE1 =         "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1",
    STANFORDIIIF1IMAGECOMPLIANCE2 =         "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2",
    STANFORDIIIF1IMAGECONFORMANCE0 =        "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0",
    STANFORDIIIF1IMAGECONFORMANCE1 =        "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1",
    STANFORDIIIF1IMAGECONFORMANCE2 =        "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2",
    IIIF1IMAGELEVEL0 =                      "http://iiif.io/api/image/1/level0.json",
    IIIF1IMAGELEVEL0PROFILE =               "http://iiif.io/api/image/1/profiles/level0.json",
    IIIF1IMAGELEVEL1 =                      "http://iiif.io/api/image/1/level1.json",
    IIIF1IMAGELEVEL1PROFILE =               "http://iiif.io/api/image/1/profiles/level1.json",
    IIIF1IMAGELEVEL2 =                      "http://iiif.io/api/image/1/level2.json",
    IIIF1IMAGELEVEL2PROFILE =               "http://iiif.io/api/image/1/profiles/level2.json",
    IIIF2IMAGELEVEL0 =                      "http://iiif.io/api/image/2/level0.json",
    IIIF2IMAGELEVEL0PROFILE =               "http://iiif.io/api/image/2/profiles/level0.json",
    IIIF2IMAGELEVEL1 =                      "http://iiif.io/api/image/2/level1.json",
    IIIF2IMAGELEVEL1PROFILE =               "http://iiif.io/api/image/2/profiles/level1.json",
    IIIF2IMAGELEVEL2 =                      "http://iiif.io/api/image/2/level2.json",
    IIIF2IMAGELEVEL2PROFILE =               "http://iiif.io/api/image/2/profiles/level2.json",

    // auth api
    AUTHCLICKTHROUGH =                      "http://iiif.io/api/auth/0/login/clickthrough",
    AUTHLOGIN =                             "http://iiif.io/api/auth/0/login",
    AUTHLOGOUT =                            "http://iiif.io/api/auth/0/logout",
    AUTHRESTRICTED =                        "http://iiif.io/api/auth/0/login/restricted",
    AUTHTOKEN =                             "http://iiif.io/api/auth/0/token",

    AUTH1CLICKTHROUGH =                     "http://iiif.io/api/auth/1/clickthrough",
    AUTH1EXTERNAL =                         "http://iiif.io/api/auth/1/external",
    AUTH1KIOSK =                            "http://iiif.io/api/auth/1/kiosk",
    AUTH1LOGIN =                            "http://iiif.io/api/auth/1/login",
    AUTH1LOGOUT =                           "http://iiif.io/api/auth/1/logout",
    AUTH1TOKEN =                            "http://iiif.io/api/auth/1/token",

    // search api
    AUTOCOMPLETE =                          "http://iiif.io/api/search/0/autocomplete",
    SEARCH =                                "http://iiif.io/api/search/0/search",

    // extensions
    TRACKINGEXTENSIONS =                    "http://universalviewer.io/tracking-extensions-profile",
    UIEXTENSIONS =                          "http://universalviewer.io/ui-extensions-profile",
    PRINTEXTENSIONS =                       "http://universalviewer.io/print-extensions-profile",
    SHAREEXTENSIONS =                       "http://universalviewer.io/share-extensions-profile",

    // other
    OTHERMANIFESTATIONS =                   "http://iiif.io/api/otherManifestations.json",
    IXIF =                                  "http://wellcomelibrary.org/ld/ixif/0/alpha.json"
}