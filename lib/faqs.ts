export interface FAQItem {
  question: string;
  answer: string;
}

export const UK_INSURANCE_FAQS: FAQItem[] = [
  {
    question: 'How can I check if my car is insured in the UK?',
    answer:
      'You can check whether your vehicle is insured by visiting the official Motor Insurers’ Bureau (MIB) public checking tool. You enter your vehicle registration number and confirm you are the registered keeper or have legal permission to drive the car. The system then queries the central Motor Insurance Database (MID) to show if an active policy is registered.',
  },
  {
    question: 'Is it free to check if my car is insured?',
    answer:
      'Yes, the public vehicle check provided by the Motor Insurers’ Bureau is completely free for individual motorists checking their own vehicle. VehicleCheck does not charge any fee to validate your registration format or direct you to the official service.',
  },
  {
    question: 'Can I check car insurance by registration number?',
    answer:
      'Yes, the checking process is based entirely on your Vehicle Registration Number (VRN / number plate). You do not need policy reference numbers, policy documents, or your V5C registration certificate to check.',
  },
  {
    question: 'Can I check another person’s vehicle insurance?',
    answer:
      'The free public enquiry service is strictly for vehicles you own or are legally entitled to drive. Checking unrelated vehicles for general curiosity is not permitted under the MIB service terms. However, if you are involved in a road traffic collision, there is a dedicated MIB accident enquiry service available for a statutory fee.',
  },
  {
    question: 'How long does it take for new insurance to appear?',
    answer:
      'While insurers are legally required to submit policy updates to the MID promptly (often within 24 to 48 hours), the full processing pipeline can sometimes take up to 7 working days. If you have received your Certificate of Motor Insurance from a registered UK insurer, your cover is legally active even while the database synchronises.',
  },
  {
    question: 'What should I do if my car shows as uninsured?',
    answer:
      'First, double check that your registration number was entered correctly with no character confusion (e.g. 0 vs O). Next, check your insurance certificate to ensure the policy dates and vehicle details are correct and payments are up to date. If everything is in order, contact your insurance provider or broker and ask them to confirm your details on the MID.',
  },
  {
    question: 'Does an insured result mean I can drive any vehicle?',
    answer:
      'No. The database simply verifies that an active insurance policy is attached to that specific vehicle. It does not verify named drivers or driving other cars (DOC) extensions. You must check your personal policy schedule to determine your personal driving entitlements.',
  },
  {
    question: 'Can I check my car insurance without an account?',
    answer:
      'Yes. The public check does not require creating an account, registering a password, or submitting credit card information.',
  },
  {
    question: 'Is VehicleCheck an official MIB website?',
    answer:
      'No. VehicleCheck is an independent informational guide and format validation tool. We are not owned, operated, or endorsed by the Motor Insurers’ Bureau (MIB), DVLA, or the UK Government. We direct users to the official MIB website for genuine database checks.',
  },
  {
    question: 'What is the difference between DVLA and MIB?',
    answer:
      'The Motor Insurers’ Bureau (MIB) manages the Motor Insurance Database (MID) used for live insurance checks. The Driver and Vehicle Licensing Agency (DVLA) is the executive agency maintaining driver records, vehicle registration, road tax (VED), and MOT status. The DVLA does not offer a public tool for checking real-time insurance status.',
  },
  {
    question: 'Can I check classic car insurance status?',
    answer:
      'Yes. As long as your classic car is covered by a standard or specialist UK road policy (such as agreed value or limited mileage cover), your insurer must submit it to the MID. You check it in the exact same manner using its registration number.',
  },
  {
    question: 'How do I check my insurance after renewing my policy?',
    answer:
      'Enter your registration number into the checker to navigate to the MIB service. If your renewal was processed recently, allow a few days for the new policy record to replace the expiring one. Always keep a printed or digital copy of your Certificate of Motor Insurance in your possession as primary legal proof.',
  },
];
