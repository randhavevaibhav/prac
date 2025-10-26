import  { useRef, useState } from 'react'
import { useOutsideClick } from '../../../hooks/useOutsideClick';


const SelectListItem = ({ idx, onSelectItemClick, name, value }) => {
  return (
    <button
      className={`block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 cursor-pointer w-full text-left1 disabled:text-gray-400 disabled:cursor-not-allowed text-left`}
      role="menuitem"
      type="button"
      disabled={idx === 1 ? true : false}
      onClick={() =>
        onSelectItemClick({
          name,
          value,
        })
      }
    >
      {name}
    </button>
  );
};

const SelectOptionsMenuList = ({
  selectList,
  handleSelectClick,
  hideOptionsList,
}) => {
  const selectMenuRef = useRef(null);
  useOutsideClick({
    ref: selectMenuRef,
    cb: () => {
      hideOptionsList();
    },
  });
  return (
    <div
      role="menu"
      className="absolute start-0 top-12 w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm z-10"
      ref={selectMenuRef}
    >
      {selectList.map((item, i) => {
        return (
          <SelectListItem
            idx={i + 1}
            name={item.name}
            value={item.value}
            onSelectItemClick={handleSelectClick}
          />
        );
      })}
    </div>
  );
};


export const SelectList = ({ selectList, defaultValue = "Test label", onSelect,fieldName }) => {
  const [showSelectList, setShowSelectList] = useState(false);
  const [selectedVal, setSelectedVal] = useState(defaultValue);

  const handleSelectClick = ({ name, value }) => {
    setShowSelectList((prev) => !prev);

    if (typeof name === "string") {
      setSelectedVal(name);
      onSelect({ name,fieldName, value });
    }
  };

  return (
    <div className="relative">
      <div className="flex divide-x divide-gray-300 overflow-hidden rounded border border-gray-300 bg-white shadow-sm ">
        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-gray-500 transition-colors hover:bg-gray-50 focus:relative w-full text-left"
          onClick={handleSelectClick}
        >
          {selectedVal}
        </button>

        <button
          type="button"
          className="px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900 focus:relative"
          aria-label="Menu"
          onClick={handleSelectClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>

      {showSelectList ? (
        <SelectOptionsMenuList
          selectList={selectList}
          handleSelectClick={handleSelectClick}
          hideOptionsList={() => setShowSelectList(false)}
        />
      ) : null}
    </div>
  );
};
