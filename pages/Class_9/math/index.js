import React from 'react'
import Link from 'next/link'



import { class9BookSubjectmath } from "../../../json/main2";

const index = () => {
    return (
        <>
            <div className="stock-container">
                {class9BookSubjectmath.map((subject) => {
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

