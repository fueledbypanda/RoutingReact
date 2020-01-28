import React, {useState, useEffect} from 'react';

export default function Users({users}) {
  console.log(users.users)
  return(
    <div>Users</div>

  )
}


// <div>
//       {
//         !!company && <Company company={ company } />
//       }
//       <h1>Companies</h1>
//       <ul>
//         {
//           companies.map( company => {
//             return (
//               <li key={company.id} >
//               <a href={`#${qs.stringify({ view: 'companies', id: company.id})}`}>{ company.name} </a></li>
//             )
//           })
//         }
//       </ul>
//     </div>
//   )
// }


// <ul>
// {
//   users.map(user => {
//     return (
//       <li></li>
//     )
//   })
// }
// </ul>
