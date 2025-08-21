import React from "react";
import EmptyState from "./EmptyState"; 
import { rupee } from "./utils";
import { CreditCard } from "lucide-react";

const Payments = ({ orders }) => {
  if (orders.length === 0) {
    return (
      <EmptyState
        icon={CreditCard}
        title="No payments yet"
        subtitle="Your successful enrollments will appear here as receipts."
      />
    );
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow overflow-hidden">
      <div className="bg-blue-600 text-white px-5 py-3 text-sm font-semibold">Payment History</div>
      <div className="divide-y divide-slate-200">
        {orders.map((o) => (
          <div key={o.id} className="px-5 py-4 grid md:grid-cols-12 gap-3 text-sm">
            <div className="md:col-span-4 font-medium text-slate-800">{o.title}</div>
            <div className="md:col-span-2 text-slate-600">{rupee(o.amount)}</div>
            <div className="md:col-span-2 text-slate-600">{o.method}</div>
            <div className="md:col-span-2 text-slate-600">{o.masked}</div>
            <div className="md:col-span-2 text-right text-slate-500">{new Date(o.at).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  
  );
};

export default Payments;
