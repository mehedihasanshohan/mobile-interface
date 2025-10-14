import React, { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";
import contactsData from "../../../public/data/contacts.json";
import { useNavigate, useOutletContext } from "react-router";

const Contacts = () => {
  const { setDialNumber, setCallStatus } = useOutletContext();
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setContacts(contactsData);
  }, []);

   const handleCallClick = (contact) => {
    setDialNumber(contact);
    setCallStatus(""); // reset previous message
    navigate("/dial"); // go to dial screen
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(search.toLowerCase()) ||
      contact.number.includes(search)
  );

  return (
    <div className="w-full max-w-xs mx-auto h-[160px] p-4 bg-gray-900
                    text-white border-r-12 border-l-12 border-gray-800
                    overflow-x-auto scrollbar-thin scrollbar-thumb-gray-700
                    scrollbar-track-gray-800">
      <h2 className="text-lg font-bold mb-3 text-center">📞 Contacts</h2>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search by name or number"
        className="w-full mb-3 px-3 py-2 rounded-md bg-gray-800 text-sm
                  focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Contact List */}
      <div className="overflow-y-auto h-[300px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        {filteredContacts.length > 0 ? (
          filteredContacts.map((contact) => (
            <div
              key={contact.id}
              className="flex items-center justify-between bg-gray-800 hover:bg-gray-700 px-3 py-2 mb-2 rounded-lg transition-all"
            >
              <div>
                <p className="font-semibold text-sm">{contact.name}</p>
                <p className="text-xs text-gray-400">{contact.number}</p>
              </div>
              <button
                onClick={() => handleCallClick(contact.number)}
                className="p-2 bg-green-600 hover:bg-green-500 rounded-full text-white">
                <FiPhone size={16} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 text-sm">
            No contacts found 😕
          </p>
        )}
      </div>
    </div>
  );
};

export default Contacts;
