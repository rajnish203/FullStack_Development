import multer  from "multer";
const storageConfiguration=multer.diskStorage({
    destination:(req, file, cb)=>{
        cb(null,'C:/Users/rajni/OneDrive/Desktop/FullStack_Development/Backend/Node js/Express/Project/Public/images' );
    },
    filename:(req, file, cb)=>{
        const name= Date.now()+"-"+file.originalname
        cb(null, name)
    }
})


export  const uploadFile=multer({
    storage:storageConfiguration,
});