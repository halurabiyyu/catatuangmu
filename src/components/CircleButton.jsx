import React, { useEffect, useState } from "react";
import QuestionMark from '../assets/question.svg'

export default function CircleButton() {
    return(
        <>
            <div className="z-10 rounded-full bg-white drop-shadow hover:bg-slate-100 h-fit mt-4">
                <button className=""><img src={QuestionMark} alt="" className="w-10 m-2"/></button>
            </div>
        </>
    )
}