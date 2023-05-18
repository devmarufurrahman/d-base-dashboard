import { PlusOutlined } from "@ant-design/icons";
import {
	Button,
	Cascader,
	DatePicker,
	Form,
	Input,
	InputNumber,
	TreeSelect,
	Typography,
	Upload,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
	if (Array.isArray(e)) {
		return e;
	}
	return e?.fileList;
};

const CourseModify = () => {
	return (
		<>
			<Typography.Title>Course List</Typography.Title>
			<Form
				labelCol={{
					span: 4,
				}}
				wrapperCol={{
					span: 14,
				}}
				layout="horizontal"
				style={{
					maxWidth: 800,
				}}>
				<Form.Item label="Course Name">
					<Input />
				</Form.Item>
				<Form.Item label="Mentor Name">
					<Input />
				</Form.Item>
				<Form.Item label="Designation Name">
					<Input />
				</Form.Item>
				<Form.Item label="Id Number">
					<InputNumber />
				</Form.Item>

				{/* <Form.Item label="TreeSelect">
					<TreeSelect
						treeData={[
							{
								title: "Light",
								value: "light",
								children: [
									{
										title: "Bamboo",
										value: "bamboo",
									},
								],
							},
						]}
					/>
				</Form.Item>
				<Form.Item label="Cascader">
					<Cascader
						options={[
							{
								value: "zhejiang",
								label: "Zhejiang",
								children: [
									{
										value: "hangzhou",
										label: "Hangzhou",
									},
								],
							},
						]}
					/>
				</Form.Item>*/}
				<Form.Item label="RangePicker">
					<RangePicker />
				</Form.Item>
				<Form.Item label="Description">
					<TextArea rows={4} />
				</Form.Item>

				<Form.Item
					label="Attachment"
					valuePropName="fileList"
					getValueFromEvent={normFile}>
					<Upload action="/upload.do" listType="picture-card">
						<div>
							<PlusOutlined />
							<div
								style={{
									marginTop: 8,
								}}>
								Upload
							</div>
						</div>
					</Upload>
				</Form.Item>
				<Form.Item>
					<Button type="submit">Submit</Button>
				</Form.Item>
			</Form>
		</>
	);
};

export default CourseModify;
