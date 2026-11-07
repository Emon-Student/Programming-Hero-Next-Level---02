const getData = async () => {
    try {
        const res = await fetch("/api/user-data");
        const data = (await res.json());
        if (!res.ok || !data.success) {
            throw new Error(`Failed Fetch User Data: ${data.message}`);
        }
        return data.data;
    }
    catch (err) {
        if (err instanceof Error) {
            console.error(`Failed Data fetching ${err.message}`);
        }
        else {
            console.error("Something Went Wrong");
        }
    }
};
const userdata = await getData();
console.log("Data", userdata);
export {};
