const properties = {
    path:"/user/:username",
    query:"SELECT * FROM institution WHERE username = ?",
    method:"get",
    req: (req)=>{
        return [req.params.id]
    }
};
export function getUserByUsername({ server,repository,render}){
    server(properties.path,repository(properties.query,properties.req,render),properties.method);
}