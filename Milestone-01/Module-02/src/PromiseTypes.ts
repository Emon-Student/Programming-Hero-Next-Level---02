interface User {
  name: string;
  age: number;
}

interface UserResponse<T> {
  data: T;
  success: boolean;
  status: number;
  message:string
}

const getData = async (): Promise<User | undefined> => {
  try {
    const res = await fetch("/api/user-data");
    const data = (await res.json()) as UserResponse<User>;
    if(!res.ok || !data.success){
        throw new Error(`Failed Fetch User Data: ${data.message}`)
    }
    return data.data;
  } catch (err) {
    if(err instanceof Error){
        console.error(`Failed Data fetching ${err.message}`)
    }
    else{
        console.error("Something Went Wrong");
    }
  }
};

const userdata = await getData();

console.log("Data", userdata);
