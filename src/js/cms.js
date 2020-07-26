import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import ProductsPreview from "./cms-preview-templates/dienstleistungen";
import ValuesPreview from "./cms-preview-templates/ueber-uns";
import ContactPreview from "./cms-preview-templates/kontakt";

CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("dienstleistungen", ProductsPreview);
CMS.registerPreviewTemplate("ueber-uns", ValuesPreview);
CMS.registerPreviewTemplate("kontakt", ContactPreview);
CMS.init();
