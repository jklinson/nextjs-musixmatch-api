# NextJS 14 & next-auth & MusixMatchAPI

## Getting Started

### Prerequisites

- Node.js (>=18.17)
- Internet connection

### Installation

1. Clone the repository

    ```bash
    git clone https://github.com/jklinson/nextjs-musixmatch-api.git
    ```

2. Install dependencies

    ```bash
    cd nextjs-musixmatch-api
    npm install
    ```

3. Configure environment variables

    - In the root directory, create a `.env` file and configure the following variables:

    ```plaintext
    MONGODB_URI=
    NEXTAUTH_SECRET=
    NEXTAUTH_URL=
    MUSIX_MATCH_API_KEY=
    ```

4. Run the application

    ```bash
    npm run dev
    ```

    OR

    If you prefer Docker, you can use Docker Compose to run the application. Ensure Docker and Docker Compose are installed on your system, then navigate to the project directory and execute:

    ```bash
    docker-compose up
    ```

    This will build and start the containers defined in the `docker-compose.yml` file.

    You can launch this url <http://localhost:3000/> on browser.



https://github.com/jklinson/nextjs-musixmatch-api/assets/3518004/325e2347-8006-44f7-a082-cdd389c2a62c


   
