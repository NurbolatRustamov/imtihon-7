// const btnAdd = document.getElementById('btn-add')
// const Name = document.getElementById('email')
// const lastName = document.getElementById('password')
// const markBal = document.getElementById('passwords')
// const submitBtn = document.getElementById('submit-btn')
// const closeBtn = document.getElementById('close-btn')
// const modal = document.getElementById('modal')
// const tbody = document.getElementById('tbody')









// btnAdd.addEventListener('click', () => {
//     modal.classList.toggle('hidden')
// })
// closeBtn.addEventListener('click', () => {
//     modal.classList.toggle('hidden')
// })
// submitBtn.addEventListener('click', () => {
//     tbody.innerHTML += `
//     <tr class="bg-white border-b">
//                 <th
//                   scope="row"
//                   class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
//                 >
//                   ${markBal.value}
//                 </th>
//                 <td class="px-6 py-4">${Name.value} ${lastName.value}</td>
//                 <td class="px-6 py-4">${new Date}</td>
//                 <td class="px-6 py-4"></td>
//                 <td class="px-6 py-4">
//                   <a href="#" class="font-medium text-blue-600 hover:underline">
//                     <button
//                       class="pt-[7px] pb-[8px] pl-[15px] pr-[15px] bg-[#438059] text-[#fff] rounded-[9px]"
//                     >
//                       Pass
//                     </button>
//                   </a>
//                 </td>
//                 <td class="px-6 py-4">
//                   <div class="dfg w-[39px] h-[39px] rounded-[5px]">
//                     <i
//                       class="fa-solid fa-pen flex justify-center pt-[10px]"
//                     ></i>
//                   </div>
//                 </td>
//                 <td class="px-6 py-4">
//                   <div class="dfgg w-[39px] h-[39px] rounded-[5px]">
//                     <i
//                       class="fa-solid fa-trash flex justify-center pt-[10px]"
//                     ></i>
//                   </div>
//                 </td>
//               </tr>
//     `
//     Name.value = ''
//     lastName.value = ''
//     markBal.value = ''



//     modal.classList.toggle('hidden')
// })



const btnAdd = document.getElementById('btn-add');
const Name = document.getElementById('email');
const lastName = document.getElementById('password');
const markBal = document.getElementById('passwords');
const submitBtn = document.getElementById('submit-btn');
const closeBtn = document.getElementById('close-btn');
const modal = document.getElementById('modal');
const tbody = document.getElementById('tbody');

btnAdd.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});

closeBtn.addEventListener('click', () => {
    modal.classList.toggle('hidden');
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();

    const mark = parseFloat(markBal.value);
    const percentage = (mark / 150) * 100;
    const status = percentage >= 50 ? 'Pass' : 'Fail';
    const statusColor = status === 'Pass' ? '#438059' : '#FF0000'; // Green for Pass, Red for Fail

    tbody.innerHTML += `
    <tr class="bg-white border-b ">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap max-[700px]:px-1 max-[700px]:text-[9px]">
            ${mark}
        </th>
        <td class="px-6 py-4 max-[700px]:px-1 max-[700px]:text-[9px]">${Name.value} ${lastName.value}</td>
        <td class="px-6 py-4 max-[700px]:px-1 max-[700px]:text-[9px]">${new Date().toLocaleDateString()}</td>
        <td class="px-6 py-4 max-[700px]:px-1 max-[700px]:text-[9px]">${percentage.toFixed(2)}%</td>
        <td class="px-6 py-4 max-[700px]:px-1 max-[700px]:text-[9px]">
            <button class="pt-[7px] pb-[8px] pl-[15px] pr-[15px] text-[#fff] rounded-[9px] max-[700px]:pl-[8px] max-[700px]:pr-[8px] max-[700px]:pt-[5px] max-[700px]:pb-[5px]" style="background-color: ${statusColor}">
                ${status}
            </button>
        </td>
        <td class="px-6 py-4 max-[700px]:px-1 ">
            <div class="dfg w-[39px] h-[39px] rounded-[5px] max-[700px]:w-[29px] max-[700px]:h-[29px]">
                <i class="fa-solid fa-pen flex justify-center pt-[10px] max-[700px]:pt-[7px]"></i>
            </div>
        </td>
        <td class="px-6 py-4 max-[700px]:px-1">
            <div class="dfgg w-[39px] h-[39px] rounded-[5px] max-[700px]:w-[29px] max-[700px]:h-[29px]">
                <i class="fa-solid fa-trash flex justify-center pt-[10px] max-[700px]:pt-[7px]"></i>
            </div>
        </td>
    </tr>
    `;

    // Reset the input fields
    Name.value = '';
    lastName.value = '';
    markBal.value = '';

    modal.classList.toggle('hidden');
});
