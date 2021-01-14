import { Formik } from 'formik'
import React from 'react'

type SearchPropsType = {
    onQuery: (values: FormValuesType) => void
    isFetching: boolean
    filter: string
    query: string
}

export interface FormValuesType {
    query: string
    filter: string
}

const UsersSearchForm = ({ onQuery, isFetching, filter, query }: SearchPropsType) => {
    return (
        <div>
            <Formik
                enableReinitialize
                initialValues={{ query: query, filter: filter }}
                onSubmit={(values: FormValuesType) => onQuery(values)}
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
                    } = props
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
                            <select
                                name="filter"
                                id="filter"
                                value={values.filter}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value="">All users</option>
                                <option value="true">Following</option>
                                <option value="false">Not following</option>
                            </select>
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
                        </form>
                    );
                }}
            </Formik>
        </div >
    )
}

export default UsersSearchForm