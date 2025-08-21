import React, { useState } from "react";
import Modal from "./Modal";
import Input from "./Input";
import { CreditCard } from "lucide-react";
import { rupee } from "./utils"; 
import { Pill } from "./Badges"; 
const EnrollModal = ({ course, onClose, onComplete }) => {
  const [method, setMethod] = useState("card");
  const [form, setForm] = useState({ name: "", card: "", exp: "", cvv: "" });

  if (!course) return null;

  return (
    <Modal open={!!course} onClose={onClose} title="Enroll in Course">
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <div className="text-sm text-slate-600">You're enrolling in</div>
          <Pill>{course.level}</Pill>
        </div>
        <div className="rounded-2xl border border-slate-200 p-4 flex gap-3 bg-blue-50/50">
          <img src={course.thumbnail} alt="t" className="h-16 w-24 rounded-lg object-cover" />
          <div className="flex-1">
            <div className="font-semibold text-slate-800">{course.title}</div>
            <div className="text-xs text-slate-500">{course.instructor} · {course.duration}</div>
          </div>
          <div className="text-blue-700 font-bold">{rupee(course.price)}</div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-slate-700">Payment method</h4>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {[
              { id: "card", label: "Card" },
              { id: "upi", label: "UPI" },
              { id: "netbanking", label: "NetBanking" },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setMethod(m.id)}
                className={`rounded-xl border px-3 py-2 text-sm font-medium ${
                  method === m.id
                    ? "border-blue-600 bg-blue-50 text-blue-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-blue-50"
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Card form (mock) */}
        {method === "card" && (
          <div className="grid gap-3">
            <Input label="Name on card" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
            <Input label="Card number" placeholder="4111 1111 1111 1111" value={form.card} onChange={(v) => setForm({ ...form, card: v })} />
            <div className="grid grid-cols-2 gap-3">
              <Input label="Expiry" placeholder="MM/YY" value={form.exp} onChange={(v) => setForm({ ...form, exp: v })} />
              <Input label="CVV" placeholder="***" value={form.cvv} onChange={(v) => setForm({ ...form, cvv: v })} />
            </div>
          </div>
        )}

        {method === "upi" && (
          <div className="grid gap-3">
            <Input label="UPI ID" placeholder="name@bank" value={form.upi || ""} onChange={(v) => setForm({ ...form, upi: v })} />
            <p className="text-xs text-slate-500">You'll get a collect request in your UPI app (mock).</p>
          </div>
        )}

        {method === "netbanking" && (
          <div className="grid gap-3">
            <label className="text-sm font-medium text-slate-700">Select bank</label>
            <select
              className="rounded-xl border border-slate-300 bg-white px-3 py-2.5 shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={form.bank || ""}
              onChange={(e) => setForm({ ...form, bank: e.target.value })}
            >
              <option value="">Choose…</option>
              {["SBI", "HDFC", "ICICI", "Axis", "Kotak"].map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        )}

        <button
          onClick={() => onComplete(course, method, form)}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white px-4 py-2.5 shadow font-semibold"
        >
          <CreditCard className="h-5 w-5" /> Pay {rupee(course.price)}
        </button>
        <p className="text-[11px] text-slate-500 text-center">Secure payment · 256‑bit encryption</p>
      </div>
    </Modal>
  );
};

export default EnrollModal;
