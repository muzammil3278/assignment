import {
    BsFillBookmarksFill,
    BsFillEyeFill,
    BsHandThumbsUp,
    BsFillHeartFill,
    BsHandThumbsDown,
    BsBoxArrowLeft,
    BsBoxArrowRight,
    BsWhatsapp,
    BsBoxArrowInUpRight,
    BsInstagram,
    BsFacebook,
} from "react-icons/bs";
import Link from "next/link";

function option1() {
    alert("Good !");
    document.getElementById("opt1").innerHTML = "Correct";
}
function option2() {
    alert("best of luck next time!");
    document.getElementById("opt2").innerHTML = "Wrong";
}
function option3() {
    alert("best of luck next time!");
    document.getElementById("opt3").innerHTML = "Wrong";
}
function option4() {
    alert("best of luck next time!");
    document.getElementById("opt4").innerHTML = "Wrong";
}
function president({ muzammil }) {

    return (
        <>
            <div className="container">
                <div className="row">
                    {/* first column */}
                    <div className="col-lg-2"></div>
                    {/* second column */}
                    <div className="col-lg-7 pb-20">
                        <div className="quiz question-number mt-16 mb-10 pl-10 pr-10 pt-10 pb-10 flex flex-direction-row justify-space align-center">
                            <span className="heading">Question # {muzammil.no}</span>
                            <div className="icon-question-number flex justify-center align-center">
                                <span
                                    className="ml-10 book bookmark align-center justify-center text-center"
                                    aria-label="Add to Bookmarks"
                                >
                                    <BsFillBookmarksFill />
                                </span>
                                <span
                                    className="ml-10 book heart align-center justify-center text-center"
                                    aria-label="Add to Favourite"
                                >
                                    <BsFillHeartFill />
                                </span>
                            </div>
                        </div>

                        <div className="quiz mt-16 mb-10 pl-10 pr-10 pt-10 pb-10 flex flex-direction-row justify-space align-center">
                            <span className="">
                                This question is previously asked in
                                <strong>{muzammil.asked}</strong>
                            </span>
                        </div>

                        <div className="quiz mt-16 question pt-20 pb-10 pl-10 pr-10">
                            <span>{muzammil.Question}</span>
                            <div className=" tags">
                                <ul className="flex flex-direction-row">
                                    <li className="mr-10 pt-4 pb-4 pl-4 pr-4 mt-4">
                                        <span className="mr-6">
                                            <BsFillEyeFill />
                                        </span>
                                        <Link href="" className="ml-6">
                                            <a>Report Error</a>
                                        </Link>
                                    </li>
                                    <li className="pt-4 pb-4 pl-4 pr-4 mt-4">
                                        <span className="mr-6">
                                            <BsFillEyeFill />
                                        </span>
                                        <Link href="" className="ml-6">
                                            <a>123456</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="option mt-16">
                                <ul>
                                    <li className="mb-16 pt-10 pb-10 pl-12 pr-12 flex flex-row align-center">
                                        <span className="flex justify-center align-center mr-10">
                                            A
                                        </span>
                                        <div onClick={option1}>{muzammil.option1}</div>
                                    </li>
                                    <span id="opt1"></span>

                                    <li className="mb-16 pt-10 pb-10 pl-12 pr-12 flex flex-row align-center">
                                        <span className="flex justify-center align-center mr-10">
                                            B
                                        </span>
                                        <div onClick={option2}>{muzammil.option2}</div>
                                    </li>
                                    <span id="opt2"></span>

                                    <li className="mb-16 pt-10 pb-10 pl-12 pr-12 flex flex-row align-center">
                                        <span className="flex justify-center align-center mr-10">
                                            C
                                        </span>
                                        <div onClick={option3}>{muzammil.option3}</div>
                                    </li>
                                    <span id="opt3"></span>

                                    <li className="mb-16 pt-10 pb-10 pl-12 pr-12 flex flex-row align-center">
                                        <span className="flex justify-center align-center mr-10">
                                            D
                                        </span>
                                        <div onClick={option4}>{muzammil.option4}</div>
                                    </li>
                                    <span id="opt4"></span>
                                </ul>
                            </div>

                            <div className=" update-date mt-16">
                                <span>{muzammil.date}</span>
                            </div>

                            <div className=" status mt-16">
                                <span>{muzammil.status}</span>
                            </div>
                        </div>

                        <div className="app mt-10 mb-10">
                            <button className="btn none btn-app ">
                                <Link href="">
                                    <a>
                                        Open in App <BsBoxArrowInUpRight />
                                    </a>
                                </Link>
                            </button>
                        </div>

                        <div class="quiz mt-10 answer pt-20 pb-10 pl-10 pr-10">
                            <span class="ans">Answer</span>
                            <span class="ans-option">{muzammil.answer}</span>
                        </div>

                        <div class="quiz mt-10 answer pt-20 pb-10 pl-10 pr-10">
                            <span class="ans">Details Solution</span>
                            <span class="ans-option">{muzammil.suggestanswer}</span>
                        </div>jbnnnnnnojbjbkj

                        <div class="verify">
                            <span>{muzammil.verify}</span>
                        </div>

                        <div class="btn-group flex justify-space mt-10">
                            <Link href="">
                                <a class="btn btn-dir">
                                    <span className="mr-6">
                                        <BsBoxArrowLeft />
                                    </span>
                                    Previous Question
                                </a>
                            </Link>
                            <Link href="">
                                <a href="" class="btn btn-dir ">
                                    Next Question
                                    <span className="ml-6">
                                        <BsBoxArrowRight />
                                    </span>
                                </a>
                            </Link>
                        </div>

                    </div>
                    {/* third column */}
                    <div className="col-lg-3"></div>
                </div>
            </div>
            <h1>muzammil : {muzammil.name}</h1>
            {

                <div>
                    <label>Years in office: </label>{president.yearsInOffice}<br />
                    <label>Vice muzammil: </label>{muzammil.vicemuzammils}<br />
                </div>

            }
        </>
    )
}

export default president

export async function getStaticPaths() {
    return {
        paths: [
            { params: { presidentId: '1' } },
            { params: { presidentId: '2' } },
            { params: { presidentId: '3' } },
            { params: { presidentId: '4' } },
        ],
        fallback: false
    }
}


export async function getStaticProps(context) {
    const { params } = context;


    const res = await fetch(`http://localhost:3000/api/hello/${params.presidentId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const posts = await res.json();

    return {
        props: {
            muzammil: posts,
        },
    }
}