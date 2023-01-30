const rows= Array.from(document.querySelectorAll('tr'));
const inputsArray=Array.from(document.querySelectorAll('input'))
const inputs=document.querySelectorAll('input')
const btn=document.querySelector('button');
const factors=document.querySelectorAll('factor');

// update the input values when changes are made
inputs.forEach((input,index)=>{
    input.addEventListener('change',(e)=>{
        input.value = e.target.value;
    })})


  
    

btn.addEventListener('click',calcGrade);


function calcGrade(){
    rows.forEach((row,index)=>{
        if (index===0  )return
        const notesPersCell=[];
        const activityNote=row.querySelector('.noteActivity').value;
        const factor=row.querySelector('.factor').value;            const resultCellForRow=  row.querySelector('.result');
            const cellsInsideRow = Array.from(row.querySelectorAll('td'))
            const neededCell=cellsInsideRow.slice(2,-1)
           const notes=row.querySelectorAll('.note');
          notes.forEach(note=>{
              if(note.value=='')return;
              notesPersCell.push(note.value)
          })
          const sumOffGrades=notesPersCell.reduce((a,b)=>Number(a)+Number(b),0)
          if (!sumOffGrades)return
         resultCellForRow.textContent = ( ((sumOffGrades / notesPersCell.length)*0.75) + activityNote*0.25 ) *factor
        })

  
}
