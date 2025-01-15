import React from "react";

interface dataType {
    id: number;
    title: string;
    body: string;
    userId: number;
}

const Configuration: React.FC = async () => {
    const data: dataType[] = await fetch("https://jsonplaceholder.typicode.com/posts", { cache: "no-store" }).then(
        (res) => res.json()
    );

    return (
        <div id="configuration">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
                {data.map((item: any) => (
                    <div key={item.id} className="card bg-gray-100 shadow-md p-4">
                        <div className="card-body">
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Configuration;
