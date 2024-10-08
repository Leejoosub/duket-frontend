import { useState } from "react";

function TimeInput() {
  const [hour, setHour] = useState("12");
  const [minute, setMinute] = useState("00");
  const [amPm, setAmPm] = useState("PM");
  return (
    <div className="mt-3 flex justify-center items-center gap-x-2">
      {/* Select hour */}
      <div className="relative">
        <select
          value={hour}
          onChange={(e) => setHour(e.target.value)}
          className="appearance-none bg-transparent pr-3"
        >
          <option value={"1"}>1</option>
          <option value={"2"}>2</option>
          <option value={"3"}>3</option>
          <option value={"4"}>4</option>
          <option value={"5"}>5</option>
          <option value={"6"}>6</option>
          <option value={"7"}>7</option>
          <option value={"8"}>8</option>
          <option value={"9"}>9</option>
          <option value={"10"}>10</option>
          <option value={"11"}>11</option>
          <option value={"12"}>12</option>
        </select>

        <div className="absolute top-1/2 end-2 -translate-y-1/2  right-0">
          <svg
            className="shrink-0 size-3 text-gray-500 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </div>
      </div>
      {/* End Select */}

      <span className="text-gray-800 dark:text-white">:</span>

      {/* select minute */}
      <div className="relative">
        <select
          value={minute}
          onChange={(e) => setMinute(e.target.value)}
          className="appearance-none bg-transparent pr-3"
        >
          <option value={"00"}>00</option>
          <option value={"01"}>01</option>
          <option value={"02"}>02</option>
          <option value={"03"}>03</option>
          <option value={"04"}>04</option>
          <option value={"05"}>05</option>
          <option value={"06"}>06</option>
          <option value={"07"}>07</option>
          <option value={"08"}>08</option>
          <option value={"09"}>09</option>
          <option value={"10"}>10</option>
          <option value={"11"}>11</option>
          <option value={"12"}>12</option>
          <option value={"13"}>13</option>
          <option value={"14"}>14</option>
          <option value={"15"}>15</option>
          <option value={"16"}>16</option>
          <option value={"17"}>17</option>
          <option value={"18"}>18</option>
          <option value={"19"}>19</option>
          <option value={"20"}>20</option>
          <option value={"21"}>21</option>
          <option value={"22"}>22</option>
          <option value={"23"}>23</option>
          <option value={"24"}>24</option>
          <option value={"25"}>25</option>
          <option value={"26"}>26</option>
          <option value={"27"}>27</option>
          <option value={"28"}>28</option>
          <option value={"29"}>29</option>
          <option value={"30"}>30</option>
          <option value={"31"}>31</option>
          <option value={"32"}>32</option>
          <option value={"33"}>33</option>
          <option value={"34"}>34</option>
          <option value={"35"}>35</option>
          <option value={"36"}>36</option>
          <option value={"37"}>37</option>
          <option value={"38"}>38</option>
          <option value={"39"}>39</option>
          <option value={"40"}>40</option>
          <option value={"41"}>41</option>
          <option value={"42"}>42</option>
          <option value={"43"}>43</option>
          <option value={"44"}>44</option>
          <option value={"45"}>45</option>
          <option value={"46"}>46</option>
          <option value={"47"}>47</option>
          <option value={"48"}>48</option>
          <option value={"49"}>49</option>
          <option value={"50"}>50</option>
          <option value={"51"}>51</option>
          <option value={"52"}>52</option>
          <option value={"53"}>53</option>
          <option value={"54"}>54</option>
          <option value={"55"}>55</option>
          <option value={"56"}>56</option>
          <option value={"57"}>57</option>
          <option value={"58"}>58</option>
          <option value={"59"}>59</option>
        </select>

        <div className="absolute top-1/2 end-2 -translate-y-1/2  right-0">
          <svg
            className="shrink-0 size-3 text-gray-500 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </div>
      </div>
      {/* End Select */}

      {/* Select AM/PM */}
      <div className="relative">
        <select
          value={amPm}
          onChange={(e) => setAmPm(e.target.value)}
          className="appearance-none bg-transparent pr-3"
        >
          <option value={"AM"}>AM</option>
          <option value={"PM"}>PM</option>
        </select>

        <div className="absolute top-1/2 end-2 -translate-y-1/2 right-0">
          <svg
            className="shrink-0 size-3 text-gray-500 dark:text-neutral-500"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 15 5 5 5-5" />
            <path d="m7 9 5-5 5 5" />
          </svg>
        </div>
      </div>
      {/* End Select */}
    </div>
  );
}

export default TimeInput;
