export enum AnnotationMotivation {
  BOOKMARKING = "oa:bookmarking",
  CLASSIFYING = "oa:classifying",
  COMMENTING = "oa:commenting",
  DESCRIBING = "oa:describing",
  EDITING = "oa:editing",
  HIGHLIGHTING = "oa:highlighting",
  IDENTIFYING = "oa:identifying",
  LINKING = "oa:linking",
  MODERATING = "oa:moderating",
  PAINTING = "sc:painting",
  QUESTIONING = "oa:questioning",
  REPLYING = "oa:replying",
  TAGGING = "oa:tagging",
  TRANSCRIBING = "oad:transcribing",
}

export enum Behavior {
  AUTO_ADVANCE = "auto-advance",
  CONTINUOUS = "continuous",
  FACING_PAGES = "facing-pages",
  HIDDEN = "hidden",
  INDIVIDUALS = "individuals",
  MULTI_PART = "multi-part",
  NO_NAV = "no-nav",
  NON_PAGED = "non-paged",
  PAGED = "paged",
  REPEAT = "repeat",
  SEQUENCE = "sequence",
  THUMBNAIL_NAV = "thumbnail-nav",
  TOGETHER = "together",
  UNORDERED = "unordered",
}

export enum ExternalResourceType {
  CANVAS = "canvas",
  CHOICE = "choice",
  OA_CHOICE = "oa:choice",
  CONTENT_AS_TEXT = "contentastext",
  DATASET = "dataset",
  DOCUMENT = "document",
  IMAGE = "image",
  MODEL = "model",
  MOVING_IMAGE = "movingimage",
  PDF = "pdf",
  PHYSICAL_OBJECT = "physicalobject",
  SOUND = "sound",
  TEXT = "text",
  TEXTUALBODY = "textualbody",
  VIDEO = "video",
}

export enum IIIFResourceType {
  ANNOTATION = "annotation",
  CANVAS = "canvas",
  COLLECTION = "collection",
  MANIFEST = "manifest",
  RANGE = "range",
  SEQUENCE = "sequence",
}

export enum MediaType {
  AUDIO_MP4 = "audio/mp4",
  CORTO = "application/corto",
  DICOM = "application/dicom",
  DRACO = "application/draco",
  EPUB = "application/epub+zip",
  GIRDER = "image/vnd.kitware.girder",
  GLB = "model/gltf-binary",
  GLTF = "model/gltf+json",
  IIIF_PRESENTATION_2 = 'application/ld+json;profile="http://iiif.io/api/presentation/2/context.json"',
  IIIF_PRESENTATION_3 = 'application/ld+json;profile="http://iiif.io/api/presentation/3/context.json"',
  JPG = "image/jpeg",
  M3U8 = "application/vnd.apple.mpegurl",
  MP3 = "audio/mp3",
  MPEG = "audio/mpeg",
  MPEG_DASH = "application/dash+xml",
  OBJ = "model/obj",
  OPF = "application/oebps-package+xml",
  PDF = "application/pdf",
  PLY = "application/ply",
  THREEJS = "application/vnd.threejs+json",
  USDZ = "model/vnd.usd+zip",
  VIDEO_MP4 = "video/mp4",
  WAV = "audio/wav",
  WEBM = "video/webm",
}

export enum RenderingFormat {
  DOC = "application/msword",
  DOCX = "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ODT = "application/vnd.oasis.opendocument.text",
  PDF = "application/pdf",
}

export enum ServiceProfile {
  // image api
  IMAGE_0_COMPLIANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/compliance.html#level0",
  IMAGE_0_COMPLIANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/compliance.html#level1",
  IMAGE_0_COMPLIANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/compliance.html#level2",
  IMAGE_0_CONFORMANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/conformance.html#level0",
  IMAGE_0_CONFORMANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/conformance.html#level1",
  IMAGE_0_CONFORMANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/conformance.html#level2",
  IMAGE_1_COMPLIANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0",
  IMAGE_1_COMPLIANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1",
  IMAGE_1_COMPLIANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2",
  IMAGE_1_CONFORMANCE_LEVEL_0 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0",
  IMAGE_1_CONFORMANCE_LEVEL_1 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1",
  IMAGE_1_CONFORMANCE_LEVEL_2 = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2",
  IMAGE_1_LEVEL_0 = "http://iiif.io/api/image/1/level0.json",
  IMAGE_1_PROFILE_LEVEL_0 = "http://iiif.io/api/image/1/profiles/level0.json",
  IMAGE_1_LEVEL_1 = "http://iiif.io/api/image/1/level1.json",
  IMAGE_1_PROFILE_LEVEL_1 = "http://iiif.io/api/image/1/profiles/level1.json",
  IMAGE_1_LEVEL_2 = "http://iiif.io/api/image/1/level2.json",
  IMAGE_1_PROFILE_LEVEL_2 = "http://iiif.io/api/image/1/profiles/level2.json",
  IMAGE_2_LEVEL_0 = "http://iiif.io/api/image/2/level0.json",
  IMAGE_2_PROFILE_LEVEL_0 = "http://iiif.io/api/image/2/profiles/level0.json",
  IMAGE_2_LEVEL_1 = "http://iiif.io/api/image/2/level1.json",
  IMAGE_2_PROFILE_LEVEL_1 = "http://iiif.io/api/image/2/profiles/level1.json",
  IMAGE_2_LEVEL_2 = "http://iiif.io/api/image/2/level2.json",
  IMAGE_2_PROFILE_LEVEL_2 = "http://iiif.io/api/image/2/profiles/level2.json",

  // auth api
  AUTH_0_CLICK_THROUGH = "http://iiif.io/api/auth/0/login/clickthrough",
  AUTH_0_LOGIN = "http://iiif.io/api/auth/0/login",
  AUTH_0_LOGOUT = "http://iiif.io/api/auth/0/logout",
  AUTH_0_RESTRICTED = "http://iiif.io/api/auth/0/login/restricted",
  AUTH_0_TOKEN = "http://iiif.io/api/auth/0/token",

  AUTH_1_CLICK_THROUGH = "http://iiif.io/api/auth/1/clickthrough",
  AUTH_1_EXTERNAL = "http://iiif.io/api/auth/1/external",
  AUTH_1_KIOSK = "http://iiif.io/api/auth/1/kiosk",
  AUTH_1_LOGIN = "http://iiif.io/api/auth/1/login",
  AUTH_1_LOGOUT = "http://iiif.io/api/auth/1/logout",
  AUTH_1_PROBE = "http://iiif.io/api/auth/1/probe",
  AUTH_1_TOKEN = "http://iiif.io/api/auth/1/token",

  // search api
  SEARCH_0 = "http://iiif.io/api/search/0/search",
  SEARCH_0_AUTO_COMPLETE = "http://iiif.io/api/search/0/autocomplete",
  SEARCH_1 = "http://iiif.io/api/search/1/search",
  SEARCH_1_AUTO_COMPLETE = "http://iiif.io/api/search/1/autocomplete",

  // extensions
  TRACKING_EXTENSIONS = "http://universalviewer.io/tracking-extensions-profile",
  UI_EXTENSIONS = "http://universalviewer.io/ui-extensions-profile",
  PRINT_EXTENSIONS = "http://universalviewer.io/print-extensions-profile",
  SHARE_EXTENSIONS = "http://universalviewer.io/share-extensions-profile",
  DOWNLOAD_EXTENSIONS = "http://universalviewer.io/download-extensions-profile",

  // other
  OTHER_MANIFESTATIONS = "http://iiif.io/api/otherManifestations.json",
  IXIF = "http://wellcomelibrary.org/ld/ixif/0/alpha.json",
}

export enum ServiceType {
  IMAGE_SERVICE_2 = "ImageService2",
  IMAGE_SERVICE_3 = "ImageService3",
}

export enum ViewingDirection {
  BOTTOM_TO_TOP = "bottom-to-top",
  LEFT_TO_RIGHT = "left-to-right",
  RIGHT_TO_LEFT = "right-to-left",
  TOP_TO_BOTTOM = "top-to-bottom",
}

export enum ViewingHint {
  CONTINUOUS = "continuous",
  INDIVIDUALS = "individuals",
  NON_PAGED = "non-paged",
  PAGED = "paged",
  TOP = "top",
}
