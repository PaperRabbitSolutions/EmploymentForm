const DataProtection = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 ">
            <h1 className="text-2xl font-bold text-center mb-8 underline">Data Protection Compliance Agreement</h1>
            
            <div className="space-y-8">
                <p className="font-semibold text-lg text-slate-600">
                    Employee Agreement to Comply with Data Protection Regulations
                </p>

                <p className="text-sm text-slate-600">
                    I, [Employee name], at this moment, acknowledge and agree to the following terms regarding data protection as an employee of PaperRabbit Solutions Pvt Ltd:
                </p>

                <div>
                    <h3 className="font-semibold text-xl text-slate-600">1. Confidentiality and Data Privacy:</h3>
                    <p className="text-sm text-slate-600">
                        I understand and acknowledge that I may have access to confidential, proprietary, and personal data of the company, its clients, and other employees. I agree to keep such information confidential and use it only for legitimate business purposes as directed by the company.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-xl text-slate-600">2. Compliance with Laws:</h3>
                    <p className="text-sm text-slate-600">
                        I agree to comply with all applicable data protection laws and regulations, including but not limited to the Information Technology Act, 2000, and the subsequent rules and amendments, as well as any company-specific data protection policies.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-xl text-slate-600">3. Data Handling:</h3>
                    <p className="text-sm text-slate-600">
                        I will handle all personal and sensitive data with the utmost care and according to the company's data protection policies. This includes collecting, processing, storing, and disposing of data securely to prevent unauthorized access, loss, or damage.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-xl text-slate-600">4. Data Access and Use:</h3>
                    <p className="text-sm text-slate-600">
                        I will access and use personal data only to the extent necessary for my job duties and as authorized by PaperRabbit Solutions Pvt Ltd. I will not disclose or share personal data with unauthorized individuals or entities.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-xl text-slate-600">5. Breach Notification:</h3>
                    <p className="text-sm text-slate-600">
                        I agree to immediately report any actual or suspected data breaches, security incidents, or violations of data protection policies to the designated data protection officer or relevant authority within PaperRabbit Solutions Pvt Ltd.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-xl text-slate-600">6. Training and Awareness:</h3>
                    <p className="text-sm text-slate-600">
                        I acknowledge that I have received, or will receive, adequate training and resources to understand and comply with data protection obligations. I agree to participate in ongoing training sessions as required by the company.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold text-xl text-slate-600">7. Consequences of Non-Compliance:</h3>
                    <p className="text-sm text-slate-600">
                        I understand that non-compliance with data protection regulations and company policies may result in disciplinary action, including termination of employment, and may also subject me to legal penalties under applicable laws.
                    </p>
                </div>

                <div className="flex gap-2 items-start ">
                    <input type="checkbox" name="" id="" className="w-8 h-8 " />
                    <p className="text-sm font-semibold text-slate-600 ">
                         I confirm that I have read, understood, and agree to comply with the above terms and conditions regarding data protection.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DataProtection;
