import React from "react";
import * as C from "./styles"
import ResumeItem from "../resumeitem";
import{
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa"

const Resume = ({ income, expense, total }) =>{
    return (
        <C.Container>
            <ResumeItem Title="Entradas" Icon = {FaRegArrowAltCircleUp} Value = {income}/>
            <ResumeItem Title="Saidas" Icon = {FaRegArrowAltCircleDown} Value = {expense}/>
            <ResumeItem Title="Total" Icon = {FaDollarSign} Value = {total}/>
        </C.Container>
    )
}

export default Resume