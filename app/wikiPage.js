export default function WikiPage(props) {
    //console.log("WikiPage: props: " + props?.page?.title)
    return (
        <div>
            <p>wiki page {props?.page?.title}</p>
        </div>
    )
}