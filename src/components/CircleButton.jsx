import React, { useEffect, useState } from "react";
import QuestionMark from '../assets/question.svg'
import Modal from "./Modal";

export default function CircleButton({toggleModal}) {
    return(
        <>
            <div className="z-10 rounded-full bg-white drop-shadow hover:bg-slate-100 h-fit mt-4">
                <button className="" onClick={toggleModal}  data-modal-target="default-modal" data-modal-toggle="default-modal"><img src={QuestionMark} alt="" className="w-10 m-2"/></button>
            </div>
        </>
    )
}