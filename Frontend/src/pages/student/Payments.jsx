import React from "react";
import EmptyState from "./EmptyState"; 
import { rupee } from "./utils";
import { CreditCard } from "lucide-react";

const Payments = ({ orders }) => {
 

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow overflow-hidden">
      <div className="bg-blue-600 text-white px-5 py-3 text-sm font-semibold">Payment History</div>
      <div className="divide-y divide-slate-200">
        
          <div  className="px-5 py-4 grid md:grid-cols-12 gap-3 text-sm">
            <div className="md:col-span-4 font-medium text-slate-800"></div>
            <div className="md:col-span-2 text-slate-600"></div>
            <div className="md:col-span-2 text-slate-600"></div>
            <div className="md:col-span-2 text-slate-600"></div>
            <div className="md:col-span-2 text-right text-slate-500"></div>
          </div>
    
      </div>
    </div>
  
  );
};

export default Payments;
