import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { AlgorithmFormNavBar } from "../nav/AlgorithmFormNavBar"

export const AlgorithmForm = () => {

    const [form, updateForm] = useState()
    const history = useHistory()

    const submitAlgorithm = (e) => {
        e.preventDefault()
        const newAlgorithm = {
            notation: form.notation,
            caseId: form.caseId,
            methodId: form.methodId,
            description: form.description,
            perm: form.perm,
            userId: parseInt(localStorage.getItem("cube_user"))
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newAlgorithm)
        }

        return fetch("http://localhost:8088/algorithms", fetchOption)
            .then(() => {
                history.push("/homepage")
            })
    }







    const [cases, setCases] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/cases")
                .then(res => res.json())
                .then((caseArray) => {
                    setCases(caseArray)
                })
        },
        []
    )



    const [methods, setMethods] = useState([])
    useEffect(
        () => {
            fetch("http://localhost:8088/methods")
                .then(res => res.json())
                .then((methodArray) => {
                    setMethods(methodArray)
                })
        },
        []
    )


















    return (
        <>
            <AlgorithmFormNavBar />


            <form className="algorithmForm">
                <h2 className="algorithmForm__title">New Algorithm</h2>






                {<fieldset>
                    <div className="form-group">
                        <label htmlFor="case">Case: </label>
                        <select name="case"
                            onChange={(e) => {
                                const copy = { ...form }
                                copy.caseId = parseInt(e.target.value)
                                updateForm(copy)
                            }}
                            defaultValue="0">
                            <option value="0" disabled hidden>Select Case...</option>
                            {
                                cases.map(
                                    (c) => {
                                        return (
                                            <option key={`case--${c.id}`} value={`${c.id}`}>
                                                {`${c.name}`}
                                            </option>
                                        )
                                    }
                                )
                            }
                        </select>
                    </div>
                </fieldset>}














                {<fieldset>
                    <div className="form-group">
                        <label htmlFor="method">method: </label>
                        <select name="method"
                            onChange={(e) => {
                                const copy = { ...form }
                                copy.methodId = parseInt(e.target.value)
                                updateForm(copy)
                            }}
                            defaultValue="0">
                            <option value="0" disabled hidden>Select Method...</option>
                            {
                                methods.map(
                                    (m) => {
                                        return (
                                            <option key={`method--${m.id}`} value={`${m.id}`}>
                                                {`${m.name}`}
                                            </option>
                                        )
                                    }
                                )
                            }
                        </select>
                    </div>
                </fieldset>}








                <fieldset>
                    <div className="form-group">
                        <label htmlFor="notation">Notation:</label>
                        <input
                            required autoFocus
                            type="text" id="description"
                            className="form-control"
                            placeholder="Notation For Algorithm..."
                            onChange={
                                (e) => {
                                    const copy = { ...form }
                                    copy.notation = e.target.value
                                    updateForm(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>





                <fieldset>
                    <div className="form-group">
                        <label htmlFor="perm">Permutation name:</label>
                        <input
                            required autoFocus
                            type="text" id="perm"
                            className="form-control"
                            placeholder="Perm..."
                            onChange={
                                (e) => {
                                    const copy = { ...form }
                                    copy.perm = e.target.value
                                    updateForm(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>




                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Description:</label>
                        <input
                            required autoFocus
                            type="text" id="description"
                            className="form-control"
                            placeholder="Result Of Algorithm..."
                            onChange={
                                (e) => {
                                    const copy = { ...form }
                                    copy.description = e.target.value
                                    updateForm(copy)
                                }
                            }
                        />
                    </div>
                </fieldset>



                <button onClick={submitAlgorithm} className="btn btn-primary">
                    Submit
                </button>

            </form>
        </>
    )
}