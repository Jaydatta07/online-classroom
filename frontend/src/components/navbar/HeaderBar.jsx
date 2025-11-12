import react from 'react';
import {useState} from 'react';

function HeaderBar() {

    const [language, setLanguage] = useState("English");

    return (
        <header className='w-full-shadow'>
            {/* top header bar */}
            <div className='flex justify-end items-center bg-white text-gray-700 text-sm px-8 py-2'>
                <div className='flex items-center gap-2'>
                    <label htmlFor="language" className='font-medium'>
                        🌐 Language:
                    </label>
                    <select 
                        id="language"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className='border border-gray-300 rounded-md px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
                    >
                        <option value="English">English</option>
                        <option value="हिन्दी">हिन्दी</option>
                        <option value="मराठी">मराठी</option>
                        <option value="Español">Español</option>
                        <option value="Français">Français</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default HeaderBar;