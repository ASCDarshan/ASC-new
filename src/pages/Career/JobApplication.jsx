import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, Input, Button } from '../../components/common';
import { toast } from 'react-toastify';
import ajaxCall from '../../components/helpers/ajaxCall';

const INITIAL_FORM_STATE = {
    name: '',
    phone: '',
    email: '',
    address: '',
    years_of_experience: '',
    resume: null,
    job_posting: '',
};

const JobApplication = () => {
    const [formState, setFormState] = useState(INITIAL_FORM_STATE);
    const [jobs, setJobs] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        fetchData("career/jobs/", setJobs);
    }, []);

    const fetchData = async (url, setData) => {
        try {
            const response = await ajaxCall(
                url,
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    method: "GET",
                },
                8000
            );
            if (response?.status === 200) {
                setData(response?.data || []);
            } else {
                console.error("Fetch error:", response);
            }
        } catch (error) {
            console.error("Network error:", error);
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formState.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formState.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formState.job_posting) newErrors.job_posting = 'Please select a job Designation';

        if (!formState.phone.trim()) {
            newErrors.phone = 'Phone number is required';
        } else if (!/^\d{10}$/.test(formState.phone)) {
            newErrors.phone = 'Phone number must be a valid 10-digit number';
        }

        if (!formState.resume) {
            newErrors.resume = 'Resume file is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!validateForm()) {
            toast.error('Please fill in all required fields correctly');
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append('name', formState.name);
        formData.append('phone', formState.phone);
        formData.append('email', formState.email);
        formData.append('address', formState.address || '');
        formData.append('years_of_experience', formState.years_of_experience || '');
        formData.append('resume', formState.resume);
        formData.append('job_posting', parseInt(formState.job_posting));

        try {
            const response = await ajaxCall('career/jobapplication/', {
                method: 'POST',
                body: formData,
            });

            if ([200, 201].includes(response.status)) {
                toast.success('Application submitted successfully');
                setFormState(INITIAL_FORM_STATE);
            } else {
                toast.error('Failed to submit application. Please try again.');
            }
        } catch (error) {
            toast.error(error.message || 'Failed to submit application. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    return (
        <section className="py-8 bg-gradient-to-b from-white to-gray-50">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Start Your Career Journey with Us
                    </h2>
                </motion.div>
                <div className="grid lg:grid-cols-1 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Input
                                            label="Full Name"
                                            name="name"
                                            value={formState.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="John Doe"
                                        />
                                        {errors.name && (
                                            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Input
                                            label="Phone Number"
                                            name="phone"
                                            value={formState.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="9876543210"
                                        />
                                        {errors.phone && (
                                            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Input
                                            label="Email Address"
                                            name="email"
                                            type="email"
                                            value={formState.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && (
                                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Input
                                            label="Address"
                                            name="address"
                                            value={formState.address}
                                            onChange={handleChange}
                                            placeholder="Your Address"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Select Job Posting
                                        </label>
                                        <select
                                            name="job_posting"
                                            value={formState.job_posting}
                                            onChange={handleChange}
                                            className={`block w-full rounded-lg border-2 ${errors.job_posting ? 'border-red-500' : 'border-gray-200'
                                                } px-4 py-3 focus:border-primary focus:ring-primary`}
                                            required
                                        >
                                            <option value="">Choose your job posting</option>
                                            {jobs.map(job => (
                                                <option key={job.id} value={job.id}>
                                                    {job.title}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.job_posting && (
                                            <p className="mt-1 text-sm text-red-600">{errors.job_posting}</p>
                                        )}
                                    </div>

                                    <div>
                                        <Input
                                            label="Years of Experience"
                                            name="years_of_experience"
                                            value={formState.years_of_experience}
                                            onChange={handleChange}
                                            placeholder="e.g., 5 years"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">
                                            Upload Resume
                                        </label>
                                        <input
                                            type="file"
                                            name="resume"
                                            accept=".pdf,.doc,.docx"
                                            onChange={handleChange}
                                            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
                                        />
                                        {errors.resume && (
                                            <p className="mt-1 text-sm text-red-600">{errors.resume}</p>
                                        )}
                                    </div>
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit Application'}
                                </Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    );
};

export default JobApplication;
