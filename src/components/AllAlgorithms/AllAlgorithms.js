


import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { AllAlgorithmsNavBar } from "../nav/AllAlgorithmsNavBar"
import { useHistory } from "react-router-dom";


export const AllAlgorithms = () => {
    const [unfilteredAlgorithms, updateUnfilteredAlgorithms] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [filteredAlgorithms, setFilteredAlgorithms] = useState([])
    const { userId } = useParams()
    const history = useHistory()
    useEffect(
        () => {
            return fetch(`http://localhost:8088/algorithms?_expand=user&_expand=method&_expand=case`)
                .then(response => response.json())
                .then((data) => {
                    updateUnfilteredAlgorithms(data)
                })
        },
        []
    )

    useEffect(
        () => {
            const filtered = unfilteredAlgorithms.filter((algorithm) => {
                if (searchTerm === "") {
                    return true
                } else if (algorithm.user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return true
                } else if (algorithm.method.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return true
                } else if (algorithm.case.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return true
                } else if (algorithm.perm.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                    return true
                } 

            })
            setFilteredAlgorithms(filtered)
        }, [searchTerm]
    )


    return (
        <>
            <AllAlgorithmsNavBar />
            <div className="App">
                <input type="text" placeholder="Search..." className="searchBox" onChange={event => { setSearchTerm(event.target.value) }} />
            </div>
            {
                searchTerm === "" ?
                unfilteredAlgorithms.map(
                    (filteredAlgorithm) => {
                        return <div className="userListItem">
                        <div key={`${filteredAlgorithm.id}`}>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.method.name}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.case.name}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.notation}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.description}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.perm}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.user.name}</h3>
                            <br></br>
                        </div>
                        </div>
                    }
                )

:

                filteredAlgorithms.map(
                    (filteredAlgorithm) => {
                        return <div className="userListItem">
                        <div key={`${filteredAlgorithm.id}`}>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.method.name}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.case.name}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.notation}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.description}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.perm}</h3>
                            <h3 class="spacingForListsContent">{filteredAlgorithm.user.name}</h3>
                            <br></br>
                        </div>
                        </div>
                    }
                )
                }

        </>
    )
}