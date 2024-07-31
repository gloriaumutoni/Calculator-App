const HeroSection = (props) => {
  return (
    <div>
      <div className="grid grid-cols-4 grid-rows-6 gap-1">
        <button  className="py-4 px-4 col-span-4 bg-slate-400 text-end">{props.value}</button>
        <button onClick={()=>props.handleOperations('AC')} className="py-4 px-4 row-start-2 bg-slate-300" >AC</button>
        <button onClick={()=>props.handleOperations('+/-')} className="py-4 px-4 row-start-2 bg-slate-300">+/-</button>
        <button onClick={()=>props.handleOperations('/100')} className="py-4 px-4 row-start-2 bg-slate-300">%</button>
        <button onClick={()=>props.handleOperations('/')} className="py-4 px-4 row-start-2 bg-slate-300">/</button>
        <button onClick={()=>props.handleOperations('*')} className="py-4 px-4 bg-orange-400">*</button>
        <button onClick={()=>props.handleOperations('7')} className="py-4 px-4 row-start-3 bg-slate-300" >7</button>
        <button onClick={()=>props.handleOperations('8')} className="py-4 px-4 row-start-3 bg-slate-300">8</button>
        <button onClick={()=>props.handleOperations('9')} className="py-4 px-4 row-start-3 bg-slate-300">9</button>
        <button onClick={()=>props.handleOperations('-')} className="py-4 px-4 bg-orange-400">-</button>
        <button onClick={()=>props.handleOperations('4')} className="py-4 px-4 row-start-4 bg-slate-300">4</button>
        <button onClick={()=>props.handleOperations('5')} className="py-4 px-4 row-start-4 bg-slate-300">5</button>
        <button onClick={()=>props.handleOperations('6')} className="py-4 px-4 row-start-4 bg-slate-300">6</button>
        <button onClick={()=>props.handleOperations('+')} className="py-4 px-4 bg-orange-400">+</button>
        <button onClick={()=>props.handleOperations('1')} className="py-4 px-4 row-start-5 bg-slate-300">1</button>
        <button onClick={()=>props.handleOperations('2')} className="py-4 px-4 row-start-5 bg-slate-300">2</button>
        <button onClick={()=>props.handleOperations('3')} className="py-4 px-4 row-start-5 bg-slate-300 ">3</button>
        <button onClick={()=>props.handleOperations('0')} className="py-4 px-4 col-span-2 bg-slate-300">0</button>
        <button onClick={()=>props.handleOperations('.')} className="py-4 px-4 col-start-3 row-start-6 bg-slate-300">.</button>
        <button onClick={()=>props.handleOperations('=')} className="py-4 px-4 col-start-4 row-start-6 bg-orange-400">=</button>
      </div>
    </div>
  );
};

export default HeroSection;
