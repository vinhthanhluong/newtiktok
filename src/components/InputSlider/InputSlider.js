import { useEffect, useState } from 'react';
import Slider from 'react-input-slider';
import PropTypes from 'prop-types';

function InputSlider({
    className,
    radius = '8px',
    trackBg = 'rgba(255, 255, 255, 0.34)',
    activeBg = 'rgba(255, 255, 255)',
    thumbBg = 'rgba(255, 255, 255)',
    widthThumb = '12px',
    heightThumb = '12px',
    min = 0,
    max,
    value,
    step = 5,

    widthX = '100%',
    heightX = '4px',

    widthY = '4px',
    heightY = '100px',

    onChange = () => {},
    isVertical = false,
}) {
    const [valueInput, setValueInput] = useState({ x: min, y: min }); // Giá trị mặc đ��nh của slider
    useEffect(() => {
        setValueInput({ x: value, y: value });
    }, [value]);

    return (
        <div className={className}>
            {isVertical ? (
                <Slider
                    styles={{
                        track: {
                            borderRadius: radius,
                            backgroundColor: trackBg,
                            width: widthY,
                            height: heightY,
                            cursor: 'pointer',
                        }, // Đường trượt
                        active: {
                            borderRadius: radius,
                            backgroundColor: activeBg,
                            cursor: 'pointer',
                        }, // Đường trượt đã kích hoạt
                        thumb: {
                            backgroundColor: thumbBg,
                            width: widthThumb,
                            height: heightThumb,
                            cursor: 'pointer',
                        }, // Nút kéo
                    }}
                    axis="y" // Trục hoạt động: x (ngang), y (dọc), hoặc cả hai ("xy")
                    y={valueInput.y} // Giá trị hiện tại
                    ymin={min} // Giá trị tối thiểu
                    ymax={max} // Giá trị tối đa
                    ystep={step} // Bước tăng giảm
                    yreverse // Đảo ngước trục y
                    onChange={({ y }) => {
                        setValueInput({ ...valueInput, y });
                        onChange(y);
                    }} // Hàm xử lý khi giá trị thay đổi
                />
            ) : (
                <Slider
                    styles={{
                        track: {
                            borderRadius: radius,
                            backgroundColor: trackBg,
                            width: widthX,
                            height: heightX,
                            cursor: 'pointer',
                        }, // Đường trượt
                        active: {
                            borderRadius: radius,
                            backgroundColor: activeBg,
                            cursor: 'pointer',
                        }, // Đường trượt đã kích hoạt
                        thumb: {
                            backgroundColor: thumbBg,
                            width: widthThumb,
                            height: heightThumb,
                            cursor: 'pointer',
                        }, // Nút kéo
                    }}
                    axis="x" // Trục hoạt động: x (ngang), y (dọc), hoặc cả hai ("xy")
                    x={valueInput.x} // Giá trị hiện tại
                    onChange={({ x }) => {
                        setValueInput({ ...valueInput, x });
                        onChange(x);
                    }} // Hàm xử lý khi giá trị thay đổi
                    xmin={min} // Giá trị tối thiểu
                    xmax={max} // Giá trị tối đa
                    xstep={step} // Bước tăng giảm
                />
            )}
        </div>
    );
}

export default InputSlider;

InputSlider.propTypes = {
    className: PropTypes.string,
    radius: PropTypes.string,
    trackBg: PropTypes.string,
    activeBg: PropTypes.string,
    thumbBg: PropTypes.string,
    widthThumb: PropTypes.string,
    heightThumb: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number.isRequired,
    step: PropTypes.number,
    value: PropTypes.number.isRequired,
    widthX: PropTypes.string,
    heightX: PropTypes.string,
    widthY: PropTypes.string,
    heightY: PropTypes.string,
    onChange: PropTypes.func,
    isVertical: PropTypes.bool,
};
