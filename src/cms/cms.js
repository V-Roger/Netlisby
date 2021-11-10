import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import MenuPagePreview from './preview-templates/MenuPagePreview'
import PhotosPagePreview from './preview-templates/PhotosPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('menu', MenuPagePreview)
CMS.registerPreviewTemplate('photos', PhotosPagePreview)
