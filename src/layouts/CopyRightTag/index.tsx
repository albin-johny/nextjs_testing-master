import Link from 'next/link';



const CopyRightTag= ()=>{
    return(
        <>
            <div className="py-3">
                <div className="container-md">
                    <p className="text-center footer-copy-right">© 2022 <Link href={`${process.env.SITE_URL}`}>dattiensgroup.site</Link></p>
                </div>
            </div>
        </>
    )
}




export default CopyRightTag;