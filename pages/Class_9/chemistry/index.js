import React from 'react'
import Link from 'next/link'



import { class9BookSubjectChemistry } from "../../../json/main2";

const index = () => {
    return (
        <>
            <div className="stock-container">
                {class9BookSubjectChemistry.map((subject) => {
                    return (
                        <div>
                            <Link href={subject.link} >
                                <a >{subject.topic}</a>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
export default index

