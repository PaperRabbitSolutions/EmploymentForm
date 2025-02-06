const ConflictOfInterest = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-8">
            <h1 className="text-2xl font-bold text-center my-6">Disclosure of Any Potential Conflicts of Interest</h1>

            <div className="space-y-6">
                <p className="text-sm text-slate-600">
                    This Disclosure of Any Potential Conflicts of Interest ("Disclosure") is made on this [Day] day of [Month], [Year], by [Employee Name] ("Employee") in favor of PaperRabbit Solutions Pvt. Ltd. ("Company").
                </p>

                <div>
                    <h3 className="font-semibold text-lg text-slate-600">1. Purpose</h3>
                    <p className="text-sm text-slate-600">
                        This Disclosure aims to identify and address potential conflicts of interest during the Employee’s engagement with PaperRabbit Solutions Pvt. Ltd.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-lg text-slate-600">2. Definition of Conflict of Interest</h3>
                    <p className="text-sm text-slate-600">
                        A conflict of interest occurs when an employee’s interests could potentially interfere with their ability to perform their duties and make impartial decisions on behalf of the Company. This includes, but is not limited to:
                    </p>
                    <ul className="list-disc pl-6 text-sm text-slate-600">
                        <li>Financial interests in competitors, clients, or suppliers</li>
                        <li>Personal relationships with competitors, clients, or suppliers</li>
                        <li>Outside employment or consultancy</li>
                        <li>Moonlighting work without consent of company management in the same domain</li>
                        <li>Any other activity that may impair objectivity and loyalty to the Company</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-semibold text-lg text-slate-600">3. Employee Declaration</h3>
                    <p className="text-sm text-slate-600">I, [Employee Name], at this moment, disclose the following potential conflicts of interest:</p>

                    <div className="space-y-4">
                        <p className="text-sm text-slate-600">1. Financial Interests:</p>
                        <p className="text-sm text-slate-600">
                            - Do you or any immediate family member have a financial interest in any competitor, client, or supplier of PaperRabbit Solutions Pvt. Ltd.?
                        </p>
                        <div className="flex space-x-4 text-sm text-slate-600">
                            <label>
                                <input type="checkbox" /> Yes
                            </label>
                            <label>
                                <input type="checkbox" /> No
                            </label>
                        </div>
                        <p className="text-sm text-slate-600">- If yes, please provide details:</p>
                        <input type="text" className="border border-slate-300 rounded px-2 w-full" />

                        <p className="text-sm text-slate-600">2. Personal Relationships:</p>
                        <p className="text-sm text-slate-600">
                            - Do you have any personal relationships with any competitor, client, or supplier of PaperRabbit Solutions Pvt. Ltd.?
                        </p>
                        <div className="flex space-x-4 text-sm text-slate-600">
                            <label>
                                <input type="checkbox" /> Yes
                            </label>
                            <label>
                                <input type="checkbox" /> No
                            </label>
                        </div>
                        <p className="text-sm text-slate-600">- If yes, please provide details:</p>
                        <input type="text" className="border border-slate-300 rounded px-2 w-full" />

                        <p className="text-sm text-slate-600">3. Outside Employment:</p>
                        <p className="text-sm text-slate-600">
                            - Are you currently engaged in any outside employment or consultancy that might conflict with your duties at PaperRabbit Solutions Pvt. Ltd.?
                        </p>
                        <div className="flex space-x-4 text-sm text-slate-600">
                            <label>
                                <input type="checkbox" /> Yes
                            </label>
                            <label>
                                <input type="checkbox" /> No
                            </label>
                        </div>
                        <p className="text-sm text-slate-600">- If yes, please provide details:</p>
                        <input type="text" className="border border-slate-300 rounded px-2 w-full" />
                    </div>
                </div>

                <div>
                    <p className="text-sm text-slate-600">
                        4. Other Activities:
                        <br />
                        - Are there other activities or relationships that might impair your objectivity and loyalty to the Company?
                    </p>
                    <div className="flex space-x-4 text-sm text-slate-600">
                        <label>
                            <input type="checkbox" /> Yes
                        </label>
                        <label>
                            <input type="checkbox" /> No
                        </label>
                    </div>
                    <p className="text-sm text-slate-600">- If yes, please provide details:</p>
                    <input type="text" className="border border-slate-300 rounded px-2 w-full" />
                </div>

                <div>
                    <p className="text-sm text-slate-600">
                        5. Duty to Update
                        <br />
                        I understand that it is my ongoing responsibility to promptly disclose any potential conflicts of interest that may arise during my employment with PaperRabbit Solutions Pvt. Ltd.
                    </p>
                </div>

                <div>
                    <div className="flex gap-2 items-start">
                        
                        <input type="checkbox" name="" id="" className="w-8 h-8 " />
                         <p className="text-sm font-semibold text-slate-600 ">I affirm that I have read and understood the Company’s policy on conflicts of interest and that the information provided in this Disclosure is accurate and complete to the best of my knowledge.</p>
                    </div>
                </div>

            
            </div>
        </div>
    )
}

export default ConflictOfInterest;
