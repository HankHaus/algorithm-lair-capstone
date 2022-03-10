// export const AllAlgorithms = () => {
//     const [user, updateUser] = useState([])
//     const [searchTerm, setSearchTerm] = useState("")
//     const { userId } = useParams()
//     const history = useHistory()
//     useEffect(
//         () => {
//             return fetch(`http://localhost:8088/algorithms?_expand=user&_expand=method&_expand=case`)
//                 .then(response => response.json())
//                 .then((data) => {
//                     updateUser(data)
//                 })
//         },
//         []
//     )
//     return (
//         <>
//             <UserNavBar />
//             <div className="App">
//                 <input type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
//             </div>
//             {

//                 user.filter((val) => {
//                     if (searchTerm == "") {
//                         return val
//                     } else if (val.user.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
//                         return val
//                     } else if (val.method.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
//                         return val
//                     } else if (val.case.name.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
//                         return val
//                     } else if (val.perm.toLowerCase().includes(searchTerm.toLocaleLowerCase())) {
//                         return val
//                     }
//                 }).map(
//                     (user) => {
//                         return <>
//                             <h3 key={user.methodId}>{user.method.name}</h3>
//                             <h3 key={user.caseId}>{user.case.name}</h3>
//                             <h3 key={user.userId}>{user.notation}</h3>
//                             <h3 key={user.userId}>{user.description}</h3>
//                             <h3 key={user.userId}>{user.perm}</h3>
//                             <h3 key={user.userId}>{user.user.name}</h3>
//                             <hr></hr>
//                             <br></br>
//                         </>
//                     }
//                 )


//             }

//         </>
//     )
// }


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
                <input type="text" placeholder="Search..." onChange={event => { setSearchTerm(event.target.value) }} />
            </div>
            {
                searchTerm === "" ?
                unfilteredAlgorithms.map(
                    (filteredAlgorithm) => {
                        return <div key={`${filteredAlgorithm.id}`}>
                            <h3>{filteredAlgorithm.method.name}</h3>
                            <h3>{filteredAlgorithm.case.name}</h3>
                            <h3>{filteredAlgorithm.notation}</h3>
                            <h3>{filteredAlgorithm.description}</h3>
                            <h3>{filteredAlgorithm.perm}</h3>
                            <h3>{filteredAlgorithm.user.name}</h3>
                            <hr></hr>
                            <br></br>
                        </div>
                    }
                )

:

                filteredAlgorithms.map(
                    (filteredAlgorithm) => {
                        return <div key={`${filteredAlgorithm.id}`}>
                            <h3>{filteredAlgorithm.method.name}</h3>
                            <h3>{filteredAlgorithm.case.name}</h3>
                            <h3>{filteredAlgorithm.notation}</h3>
                            <h3>{filteredAlgorithm.description}</h3>
                            <h3>{filteredAlgorithm.perm}</h3>
                            <h3>{filteredAlgorithm.user.name}</h3>
                            <hr></hr>
                            <br></br>
                        </div>
                    }
                )
                }

        </>
    )
}