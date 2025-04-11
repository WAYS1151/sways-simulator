import { useState } from "react";

export default function SwaysSimulator() {
  const [age, setAge] = useState(70);
  const [health, setHealth] = useState("보통");
  const [wealth, setWealth] = useState("5000만~1억");

  const getMonthlyPayment = () => {
    if (health === "양호") return 400000;
    if (health === "보통") return 500000;
    return 700000;
  };

  const getContractFee = () => {
    if (wealth === "1000만 미만") return 2500000;
    if (wealth === "1000만~5000만") return 3000000;
    if (wealth === "5000만~1억") return 4000000;
    if (wealth === "1억~10억") return 6000000;
    return 7500000;
  };

  const monthly = getMonthlyPayment();
  const contractFee = getContractFee();
  const totalAfter3Years = monthly * 36;
  const repayment = totalAfter3Years * 0.7;

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">S.WAYS 보험 시뮬레이터</h1>
      <div className="grid gap-4">
        <div>
          <label>나이</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </div>
        <div>
          <label>건강 상태</label>
          <select value={health} onChange={(e) => setHealth(e.target.value)}>
            <option value="양호">양호</option>
            <option value="보통">보통</option>
            <option value="나쁨">나쁨</option>
          </select>
        </div>
        <div>
          <label>재산 수준</label>
          <select value={wealth} onChange={(e) => setWealth(e.target.value)}>
            <option value="1000만 미만">1000만 미만</option>
            <option value="1000만~5000만">1000만~5000만</option>
            <option value="5000만~1억">5000만~1억</option>
            <option value="1억~10억">1억~10억</option>
            <option value="10억 이상">10억 이상</option>
          </select>
        </div>
      </div>
      <div className="mt-6 p-4 border rounded shadow">
        <div><strong>월 지급액:</strong> {monthly.toLocaleString()}원</div>
        <div><strong>계약금:</strong> {contractFee.toLocaleString()}원</div>
        <div><strong>3년 수령 총액:</strong> {totalAfter3Years.toLocaleString()}원</div>
        <div><strong>사망 시 회수액 (70%):</strong> {repayment.toLocaleString()}원</div>
      </div>
    </div>
  );
}
