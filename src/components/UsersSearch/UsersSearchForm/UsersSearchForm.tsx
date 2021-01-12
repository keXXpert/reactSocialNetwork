import { Formik } from 'formik'
import React from 'react'

type SearchPropsType = {
    onQuery: (values: { query: string, friend: boolean }) => void
    isFetching: boolean
}

const UsersSearchForm = ({ onQuery, isFetching }: SearchPropsType) => {
    return (
        <div>
            <Formik
                initialValues={{ query: '', friend: false }}
                onSubmit={values => onQuery(values)}
            >
                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        dirty,
                        // isSubmitting,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        handleReset
                    } = props;
                    return (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="query" style={{ display: "block" }}>
                                Search Users
                            </label>
                            <input
                                id="query"
                                placeholder="Search users by name..."
                                type="text"
                                value={values.query}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                className={
                                    errors.query && touched.query
                                        ? "text-input error"
                                        : "text-input"
                                }
                            />
                            {errors.query && touched.query && (
                                <div className="input-feedback">{errors.query}</div>
                            )}

                            <button
                                type="button"
                                className="outline"
                                onClick={handleReset}
                                disabled={!dirty || isFetching}
                            >
                                Reset
                            </button>
                            <button type="submit" disabled={isFetching}>
                                Search
                            </button>
                            <label htmlFor="friend" style={{ display: "block" }}>
                                <input type='checkbox' id='friend' checked={values.friend} onChange={handleChange} />Friend
                            </label>

                        </form>
                    );
                }}
            </Formik>
        </div >
    )
}

export default UsersSearchForm