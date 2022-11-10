import React from 'react';

const Blog = () => {
    return (
        <div className='w-4/5 mx-auto'>
            <div className="card card-side border border-orange-400 bg-base-100 shadow-xl my-5">
                <div className='p-10'>
                    <h2>Difference between SQL and NoSQL</h2>
                </div>
                <div className="card-body">
                    <p>
                        The five critical differences between SQL vs NoSQL are: 1.SQL
                        databases are relational, NoSQL databases are non-relational. 2.SQL
                        databases use structured query language and have a predefined
                        schema. NoSQL databases have dynamic schemas for unstructured data.
                        3.SQL databases are vertically scalable, while NoSQL databases are
                        horizontally scalable. 4.SQL databases are table-based, while NoSQL
                        databases are document, key-value, graph, or wide-column stores.
                        5.SQL databases are better for multi-row transactions, while NoSQL
                        is better for unstructured data like documents or JSON.
                    </p>
                </div>
            </div>
            <div className="card card-side border border-orange-400 bg-base-100 shadow-xl my-5">
                <div className='p-10'>
                    <h2>What is JWT, and how does it work?</h2>
                </div>
                <div className="card-body">
                    <p>
                        JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                    </p>
                </div>
            </div>
            <div className="card card-side border border-orange-400 bg-base-100 shadow-xl my-5">
                <div className='p-10'>
                    <h2>What is the difference between javascript and NodeJS?</h2>
                </div>
                <div className="card-body">
                    <p>
                        1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.

                        As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.

                        2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.

                        3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.

                        4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.

                        Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.

                        5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.

                        Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.

                        If you’re interested in becoming a Node.js developer, check out KnowledgeHut’s  best Node.js course today to get started.  

                    </p>
                </div>
            </div>
            <div className="card card-side border border-orange-400 bg-base-100 shadow-xl my-5">
                <div className='p-10'>
                    <h2>How does NodeJS handle multiple requests at the same time?</h2>
                </div>
                <div className="card-body">
                    <p>
                        Node.Js does use threads behind the scenes to perform I/O operations. To be more spesific to your question - there will be a limit where a client will have to wait for an idle thread to perform a new I/O task.

                        You can make an easy toy example - running several I/O tasks concurrently (by using Promise.all for instance) and measure the time it takes for each to finish. Then add a new task and repeat. At some point you'll notice two groups. For example 4 requests took 250ms and the other 2 took 350ms (and there you get "requests blocking each other").

                        Node.Js is commonly refered as single threaded for its default CPU-operations excecution (in contrary to its Non-blocking I/O architecture). therefore it won't be very wise using it for intensive CPU operations, but very efficient when it comes to I/O operations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;