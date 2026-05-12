const tyats = [
    "किनकी मलाई हाँस उठ्यो!",
    "यो एउटा नयाँ ठट्टा हो!",
    "अर्को रमाइलो कुरा यहाँ छ।"
];

document.getElementById('generate-btn').addEventListener('click', () => {
    const randomTyat = tyats[Math.floor(Math.random() * tyats.length)];
    document.getElementById('tyat-display').innerText = randomTyat;
});const tyats = [
    "किनकी मलाई हाँस उठ्यो!", //
    "म प्रोग्रामर बन्न खोज्दै थिएँ, तर वेबसाइटले नै मलाई 'Not Found' भनिदियो।",
    "जिन्दगी र कोडिङ उस्तै हो, एउटा सानो गल्तीले सबै कुरा बिग्रिन्छ।",
    "ब्याचलर पढ्दा पढ्दै कपाल फुल्यो, तर एउटा वेबसाइट बनाउन सकिएन!",
    "मलाई लाग्थ्यो म स्मार्ट छु, तर Git को एररले मेरो औकात देखाइदियो।",
    "साथी: ओई के गर्दै छस्? म: केही छैन, एउटा बटन थिच्न सिकाउँदै छु।",
    "काम यस्तो गर कि मान्छेले भनुन् - 'यो बाहेक अरू जे गरे नि हुन्छ'!",
    "बिहान उठ्छु, कोड गर्छु, एरर आउँछ, सुत्छु। भोलिपल्ट फेरि त्यही!",
    "कोडिङ सिक्नु भन्दा त बरु क्रिकेटको स्कोर हेर्न सजिलो छ।"
];

document.getElementById('generate-btn').addEventListener('click', () => {
    const randomTyat = tyats[Math.floor(Math.random() * tyats.length)];
    const displayElement = document.getElementById('tyat-display');
    
    if (displayElement) {
        displayElement.innerText = randomTyat;
    } else {
        console.error("id='tyat-display' भएको ठाउँ भेटिएन!");
    }
});