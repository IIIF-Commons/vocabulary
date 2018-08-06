export enum ServiceProfile {

    // image api
    IMAGE_0_COMPLIANCE_LEVEL_0 =                "http://library.stanford.edu/iiif/image-api/compliance.html#level0",
    IMAGE_0_COMPLIANCE_LEVEL_1 =                "http://library.stanford.edu/iiif/image-api/compliance.html#level1",
    IMAGE_0_COMPLIANCE_LEVEL_2 =                "http://library.stanford.edu/iiif/image-api/compliance.html#level2",
    IMAGE_0_CONFORMANCE_LEVEL_0 =               "http://library.stanford.edu/iiif/image-api/conformance.html#level0",
    IMAGE_0_CONFORMANCE_LEVEL_1 =               "http://library.stanford.edu/iiif/image-api/conformance.html#level1",
    IMAGE_0_CONFORMANCE_LEVEL_2 =               "http://library.stanford.edu/iiif/image-api/conformance.html#level2",
    IMAGE_1_COMPLIANCE_LEVEL_0 =                "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",
    IMAGE_1_COMPLIANCE_LEVEL_1 =                "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1",
    IMAGE_1_COMPLIANCE_LEVEL_2 =                "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2",
    IMAGE_1_CONFORMANCE_LEVEL_0 =               "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0",
    IMAGE_1_CONFORMANCE_LEVEL_1 =               "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1",
    IMAGE_1_CONFORMANCE_LEVEL_2 =               "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2",
    IMAGE_1_LEVEL_0 =                           "http://iiif.io/api/image/1/level0.json",
    IMAGE_1_PROFILE_LEVEL_0 =                   "http://iiif.io/api/image/1/profiles/level0.json",
    IMAGE_1_LEVEL_1 =                           "http://iiif.io/api/image/1/level1.json",
    IMAGE_1_PROFILE_LEVEL_1 =                   "http://iiif.io/api/image/1/profiles/level1.json",
    IMAGE_1_LEVEL_2 =                           "http://iiif.io/api/image/1/level2.json",
    IMAGE_1_PROFILE_LEVEL_2 =                   "http://iiif.io/api/image/1/profiles/level2.json",
    IMAGE_2_LEVEL_0 =                           "http://iiif.io/api/image/2/level0.json",
    IMAGE_2_PROFILE_LEVEL_0 =                   "http://iiif.io/api/image/2/profiles/level0.json",
    IMAGE_2_LEVEL_1 =                           "http://iiif.io/api/image/2/level1.json",
    IMAGE_2_PROFILE_LEVEL_1 =                   "http://iiif.io/api/image/2/profiles/level1.json",
    IMAGE_2_LEVEL_2 =                           "http://iiif.io/api/image/2/level2.json",
    IMAGE_2_PROFILE_LEVEL_2 =                   "http://iiif.io/api/image/2/profiles/level2.json",

    // auth api
    AUTH_0_CLICK_THROUGH =                      "http://iiif.io/api/auth/0/login/clickthrough",
    AUTH_0_LOGIN =                              "http://iiif.io/api/auth/0/login",
    AUTH_0_LOGOUT =                             "http://iiif.io/api/auth/0/logout",
    AUTH_0_RESTRICTED =                         "http://iiif.io/api/auth/0/login/restricted",
    AUTH_0_TOKEN =                              "http://iiif.io/api/auth/0/token",

    AUTH_1_CLICK_THROUGH =                      "http://iiif.io/api/auth/1/clickthrough",
    AUTH_1_EXTERNAL =                           "http://iiif.io/api/auth/1/external",
    AUTH_1_KIOSK =                              "http://iiif.io/api/auth/1/kiosk",
    AUTH_1_LOGIN =                              "http://iiif.io/api/auth/1/login",
    AUTH_1_LOGOUT =                             "http://iiif.io/api/auth/1/logout",
    AUTH_1_TOKEN =                              "http://iiif.io/api/auth/1/token",

    // search api
    SEARCH_0 =                                  "http://iiif.io/api/search/0/search",
    SEARCH_0_AUTO_COMPLETE =                    "http://iiif.io/api/search/0/autocomplete",
    SEARCH_1 =                                  "http://iiif.io/api/search/1/search",
    SEARCH_1_AUTO_COMPLETE =                    "http://iiif.io/api/search/1/autocomplete",

    // extensions
    TRACKING_EXTENSIONS =                       "http://universalviewer.io/tracking-extensions-profile",
    UI_EXTENSIONS =                             "http://universalviewer.io/ui-extensions-profile",
    PRINT_EXTENSIONS =                          "http://universalviewer.io/print-extensions-profile",
    SHARE_EXTENSIONS =                          "http://universalviewer.io/share-extensions-profile",

    // other
    OTHER_MANIFESTATIONS =                      "http://iiif.io/api/otherManifestations.json",
    IXIF =                                      "http://wellcomelibrary.org/ld/ixif/0/alpha.json"
}