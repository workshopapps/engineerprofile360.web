import React from 'react'
export const CategoryTable = [
    {
        id: "1",
        category:'javascript' ,
        Numberofquestions: "105",
      },
      {
        id: "2",
        category:'CSS' ,
        Numberofquestions: "105",
      },
      {
        id: "3",
        category:'HTML' ,
        Numberofquestions: "105",
      }
]
export const CategoryItems = CategoryTable.map((CategoryTable=>{
    return(
        <tr>
            <td>{CategoryTable.id}</td>
            <td>{CategoryTable.category}</td>
            <td>{CategoryTable.Numberofquestions}</td>
        </tr>
    )
}))

