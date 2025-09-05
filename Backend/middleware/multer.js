    import multer from "multer"

    const storage = multer.memoryStorage();
    export const singleUpload = multer({storage}).single("file");
    export const uploadPdf   = multer({ storage: multer.memoryStorage() }).single("pdf");