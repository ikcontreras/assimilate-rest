const properties = {
    path:"/institution",
    query:"SELECT * FROM institution",
    method:"get",
    req: ()=> {}
};
export function getInstitute({build,repository,render}){
    build(properties.path,repository(properties.query,properties.req,render),properties.method);
}
