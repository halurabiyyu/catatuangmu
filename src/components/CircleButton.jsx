import React, { useEffect, useState } from "react";
import QuestionMark from '../assets/question-mark.svg'
import Modal from "./Modal";

export default function CircleButton({toggleModal}) {
    return(
        <>
            <div className="z-10 h-fit mt-4">
                <button className="" onClick={toggleModal}  data-modal-target="default-modal" data-modal-toggle="default-modal"><img src={QuestionMark} alt="" className="w-10 m-2 hover:bg-slate-100 rounded-full drop-shadow bg-white"/></button>
            </div>
        </>
    )
}