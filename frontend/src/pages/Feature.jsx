import React from "react";

function Feature() {
  return (
    <div>
      <section className="py-20 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="card-title">AI-Powered</h3>
                <p>
                  Our AI analyzes your input and generates a tailored resume for
                  you.
                </p>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="card-title">Multiple Templates</h3>
                <p>
                  Choose from a variety of professionally designed resume
                  templates.
                </p>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body items-center text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="card-title">Job-Specific Resumes</h3>
                <p>
                  Optimize your resume for specific job roles and industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Feature;
