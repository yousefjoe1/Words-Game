import React, { useState } from 'react'

const Boxs: React.FC = () => {

  // const [boxs,setBoxs] = useState<string[]>([ // old way
  //   '','','','','','','',
  //   '','','','','','','',
  //   '','','','','','','',
  //   '','','','','','','',
  //   '',''])

  const [updated,setUpdated] = useState<string[][]>
  ([
    ['','','','','']
    ,['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','',''],
    ['','','','','']]) 

  const letters: string[] =
   ["a", "b", "c", "d", "e", 
   "f", "g", "h", "i", "j", 
   "k", "l", "m", "n", "o", 
   "p", "q", "r", "s", "t", 
   "u", "v", "w", "x", "y", 
   "z"];

  const words:string[] = ['about','queen','small','store','right']

  const [zero,setZero] = useState(0)
  const [arrLength,setArrLength] = useState(4)

  // const [selectd,setSelectd] = useState<string[]>([])// old way

  const [enterMsg,setEnterMsg] = useState('')

  const [matching,setMatching] = useState<{sl:string;ex:string}[]>([])

  const addLetter = (lt:string)=> {
    let arr = [...updated]
    
    if(zero != arrLength+1){
      setZero(zero +1)
      for (let i = 0; i < arr.length; i++) {
  
        for (let j = 0; j < arr[i].length; j++) {
        
          if(arr[i][j] === ''){
            arr[i][j] = lt;
            let newar = arr;
            setUpdated(newar)
            return;
          }
        }
      }
    }else {
      setEnterMsg('You Need To Click Enter First')
    }
    

  } 

  const deleteLetter = ()=> {

    let lett = [...updated];

      for (let i = 0; i < updated.length; i++) {

        if(matching[i]?.sl !== lett[i].join('')){
          console.log('delete');

        for (let j = 0; i < lett[i].length; j++) {
        if(lett[i][j] == ''){
          setUpdated(lett)
          if(lett[i -1 ] && lett[i][0] == ''){
            
          }else {
            if(zero > 0){
              setZero(zero - 1)
            }
            lett[i][j-1 ] = '';
          }
          return;
        }else if(lett[i][4] !== '') {
          lett[i][4] = '';
          if(zero > 0){
            setZero(zero - 1)
          }
          setUpdated(lett)
          return;
        }
      }
        }
      }

  }

  const checkWord = ()=> {

    setEnterMsg('')

    if(!updated[5].includes('')){
      console.log('end words');
      
    }else {
      for (let i = 0; i < updated.length; i++) {
        if(updated[i].includes('')){}
        // else if(!selectd.includes(updated[i].join(''))) { //old way
            if(updated[i +1].includes('')){
              let ar = updated[i].join('')
              let obj = {sl:ar,ex:words[i]}
              if(matching[i]?.ex === obj.ex){
              }else {
                setArrLength(arrLength + 5)
                setMatching([...matching,obj])
              }
              return;
            }
        // }
      }

    }
  }
  
  return (
    <div className='main text-center'>

      <div className="boxs my-2">
      <div className="result bg-slate-400 rounded-md m-1">
      {matching.map((el,i)=><div className='m-2 p-1' key={i} >
        <span className='m-2 text-lime-200'>The Word is: <span className='text-lg border-b-2 '>{el.ex}</span></span>
        <span className='m-2'>Your Word is: <span className='text-lg border-b-2 '>{el.sl}</span></span>
      </div> )}

      </div>

      <div className="emptyboxs my-4 relative mx-auto max-w-lg p-1 rounded-sm justify-between flex columns-5 flex-wrap bg-slate-600">

      {enterMsg.length > 0 && <div className='enter-msg bg-slate-400 text-lg p-1 rounded-md'>{enterMsg}</div>}
        <div className="boxs-container w-full flex-wrap flex">
            {updated.map((el,i)=> (
              <div key={i} className='w-full flex justify-between m-2 '>
              {el.map((el,i)=>(
                <div key={i} className='w-14 text-center font-bold text-sky-400 h-9 mt-1 ml-1 rounded-sm border-slate-400 border-2'>{el}</div>
                ))}
            </div>
          ))}
        </div>
      </div>

      </div>

      {/*//////////////////// Letters //////////////////////*/}

      <div className="letters mx-auto">

        {letters.map(letter=> (
          <button onClick={()=> addLetter(letter)} 
          // change letter text color on hover
          className='m-3 bg-slate-400 hover:text-teal-100 rounded-lg text-lg p-3' key={letter}>{letter}</button>
        ))}
        <button onClick={checkWord} className='m-3 hover:bg-lime-500 hover:text-slate-100 text-lime-400 bg-slate-600 rounded-lg text-lg p-3' >Enter</button>
        <button onClick={deleteLetter} className='m-3 text-red-900 hover:bg-red-500 hover:text-red-50 bg-slate-300 rounded-lg text-lg p-3' >Delete</button>
      </div>
    </div>
  )
}

export default Boxs


{/* {boxs?.map((el,i)=> (//old way
  <div key={i} className='w-14 text-center font-bold text-sky-400 h-9 mt-1 rounded-sm border-slate-400 border-2'>{el}</div>
))} */}