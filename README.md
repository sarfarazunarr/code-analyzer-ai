# CoderAI - Code Analysis and Error Resolution

CoderAI is a React-based application that utilizes the OpenAI API to analyze code snippets, identify errors, and provide concise solutions. With CoderAI, you can quickly enhance your code quality and streamline the development process.

## Features

- **Code Analysis**: Submit your code snippets to CoderAI for thorough analysis.
  
- **Error Identification**: Receive detailed information about errors present in your code.
  
- **Solution Suggestions**: Get concise solutions for each identified error to improve your code.

## Setup

To use CoderAI, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/sarfarazunarr/coderAI.git
   cd coderAI
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up your OpenAI API key:

   - Obtain your OpenAI API key.
   - Create a `.env` file in the project root.
   - Add the following line to the `.env` file, replacing `YOUR_OPEN_AI_API_KEY` with your actual API key:

     ```
     REACT_APP_OPEN_AI_API_KEY=YOUR_OPEN_AI_API_KEY
     ```

## Usage

1. Run the CoderAI application:

   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000`.

3. Enter your code snippet in the textarea and click "Analyze Code."

4. Review the analysis results, including error details and suggested solutions.

## Dependencies

- React: A JavaScript library for building user interfaces.
- OpenAI: Integration with the OpenAI API for code analysis.

## Contributing

We welcome contributions! If you find issues or have suggestions, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README further based on additional features or specific instructions for your project.
